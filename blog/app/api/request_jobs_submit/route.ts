import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const role = formData.get('role') as string
    const resumeFile = formData.get('resume') as File | null

    const baseId = process.env.AIRTABLE_BASE_ID
    const tableName = process.env.AIRTABLE_TABLE_NAME_JOBS
    const token = process.env.AIRTABLE_TOKEN

    // Step 1: Create Record
    const createRes = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: { Name: name, Email: email, Role: role },
        }),
      }
    )

    if (!createRes.ok) {
      const err = await createRes.json()
      console.error('Airtable create error:', err)
      return NextResponse.json({ data: 'error', detail: err }, { status: 500 })
    }

    const created = await createRes.json()
    const recordId = created.id

    // Step 2: Add Resume Attachment to Record
    if (resumeFile && recordId) {
      const buffer = await resumeFile.arrayBuffer()
      const base64 = Buffer.from(buffer).toString('base64')

      const uploadRes = await fetch(
        `https://content.airtable.com/v0/${baseId}/${recordId}/Resume/uploadAttachment`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contentType: resumeFile.type,
            filename: resumeFile.name,
            file: base64,
          }),
        }
      )

      if (!uploadRes.ok) {
        const err = await uploadRes.json()
        console.error('Airtable upload error:', err)
      }
    }

    return NextResponse.json({ data: 'ok' })

  } catch (err) {
    console.error('Jobs submit error:', err)
    return NextResponse.json({ data: 'error' }, { status: 500 })
  }
}
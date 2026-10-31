// Organizations that have signed the organizational pledge.
// Add one line per organization. `logo` is a path under /public (e.g. '/endorsers/walkable-volusia.png');
// leave it out and the name shows as text instead.
export type Endorser = {
  name: string
  url?: string
  logo?: string
}

export const endorsers: Endorser[] = [
  { name: 'Walkable Volusia', url: "https://www.walkablevolusia.org", logo:"/Walkable-Volusia-Logo-2.png" },
]
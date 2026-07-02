import { Navbar } from '../components/nav'
import { AnnouncementBanner } from '../components/announcements'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Messaging Terms and Conditions - Buy Brightline",
  description:
    "Mobile messaging (SMS) terms and conditions for the Buy Brightline campaign and buybrightline.com.",
};

export default function SMSTerms() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar spans full width */}
      <Navbar />

      {/* Announcement */}
      <AnnouncementBanner />

      <div className="flex flex-col lg:flex-row flex-1 bg-coolyellow">

        {/* Left: yellow panel */}
        <section className="lg:flex-1 bg-coolyellow text-deepnavy px-8 lg:px-16 pt-8 pb-8">
            <h1 className="font-display text-5xl font-black leading-none mb-8 text-deepnavy">
              Mobile Messaging Terms and Conditions
            </h1>
            <p className="mb-8 italic text-gray-500">
        Last modified: July 1, 2026
      </p>
 
      <section className="space-y-4 leading-relaxed">
        <p>
          The Buy Brightline campaign (&ldquo;<strong>CAMPAIGN</strong>,&rdquo;
          &ldquo;<strong>We</strong>,&rdquo; &ldquo;<strong>Us</strong>,&rdquo;
          &ldquo;<strong>Our</strong>&rdquo;) is offering a mobile messaging
          program (the &ldquo;<strong>Program</strong>&rdquo;), subject to
          these Mobile Messaging Terms and Conditions (the &ldquo;
          <strong>Terms</strong>&rdquo;). If you do not wish to continue
          participating in the program or no longer agree to these Terms, you
          can reply &ldquo;<strong>STOP</strong>&rdquo; to any mobile message
          from Us in order to opt out of the Program.
        </p>
 
        <ol className="ml-6 list-decimal space-y-4">
          <li>
            By signing up for the program through a form provided on
            www.buybrightline.com or any other web page controlled by
            CAMPAIGN, or giving your information to Us at an in-person event,
            you are giving your express consent to receive automated text
            messages at the phone number you provided. Regardless of the
            opt-in method you utilized to join the Program, you agree that
            these Terms apply to your participation in the Program. By
            opting-in{" "}
            <strong>
              you agree to receive autodialed marketing mobile messages and
              you understand that your consent to be contacted in this method
              is not required to make any purchase from Us.
            </strong>
          </li>
          <li>
            We will not be liable for any delays in the receipt of any SMS
            messages as delivery is subject to effective transmission from
            your mobile service operator. SMS MESSAGE SERVICES ARE PROVIDED
            ON AN &ldquo;AS IS&rdquo; BASIS, AND WE MAKE NO WARRANTY, EXPRESS
            OR IMPLIED, AND ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY AND FITNESS FOR PARTICULAR PURPOSE, ARE HEREBY
            EXPRESSLY DISCLAIMED.
          </li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
          <li>
            Data obtained from you in connection with this SMS service may
            include your cell phone number, your carrier&rsquo;s name, and
            the date, time and content of your messages, as well as other
            information that you provide. We may use this information to
            contact you and to provide the services you request from us. If
            you change, forfeit, or deactivate the phone number you have
            provided to CAMPAIGN, you agree to notify Us immediately. Failure
            to do so constitutes a material breach of these SMS Terms.
          </li>
          <li>
            For additional information regarding use of information
            collected in connection with the Program, please refer to the
            Privacy Policy, a copy of which is available at:
            www.buybrightline.com/privacy-policy.
          </li>
          <li>
            By subscribing, you consent to receive text messages including
            alerts and updates. Message frequency varies.
          </li>
          <li>
            By subscribing or otherwise using the service, you acknowledge
            and agree that we will have the right to change and/or terminate
            the service at any time, with or without cause and/or advance
            notice.
          </li>
          <li>
            To cancel your SMS subscriptions, text STOP in reply to any text
            message you receive. You will receive a subsequent message
            confirming your opt-out request.
          </li>
          <li>
            For additional help, text HELP in reply to a text message you
            receive. You can also contact us at hello@buybrightline.com for
            additional assistance.
          </li>
          <li>
            Supported carriers may change from time to time, but currently
            include Verizon Wireless, AT&amp;T, T-Mobile®, Sprint, Metro®,
            Boost, Virgin Mobile USA &amp; U.S. Cellular®, among others.
          </li>
          <li>Message and Data Rates May Apply.</li>
          <li>
            By signing up, you are confirming you are over the age of 13, and
            are either the wireless account subscriber or have the
            permission of the wireless account subscriber to send and
            receive text messages under these Terms and Conditions.
          </li>
          <li>
            <strong>Program Availability:</strong> Currently, the Program is
            only available to residents of the United States. You understand
            and acknowledge that you may not sign up for, access, or attempt
            to access or use the Program from countries outside of the U.S.
            You agree to abide by U.S. and other applicable export control
            laws and not to transfer, by electronic transmission or
            otherwise, any content or software subject to restrictions under
            such laws to a national destination or person prohibited under
            such laws.
          </li>
        </ol>
        </section>
    </section>
    </div>

    </div>
  )
}
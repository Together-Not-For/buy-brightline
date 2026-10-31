export type UpcomingEvent = {
  id: string; // stable key — also what the sign-up form sends
  title: string;
  dayLabel: string; // "Monday, October 5"
  shortDate: string; // "Mon, Oct 5"
  time: string;
  location: string;
  description: string;
};

// Listed in date order. Edit these, and the left column and sign-up card both update.
export const upcomingEvents: UpcomingEvent[] = [
  // {
  //   id: 'meeting-2026-10-28',
  //   title: "Meeting with State Rep. Franklin",
  //   dayLabel: 'Wednesday, October 28',
  //   shortDate: 'Wed, Oct 28',
  //   time: '1:30pm',
  //   location: 'Zoom',
  //   description:
  //     "We're meeting with State Representative Gallop Franklin about our campaign to buy Brightline's debt with our tax dollars. There's strength in numbers, so please come and help show our campaign has real support.",
  // },
  {
    id: 'weekly-2026-10-31',
    title: 'Walk + Talk',
    dayLabel: 'Friday, October 31',
    shortDate: 'Fri, Oct 31',
    time: '9:30am',
    location: 'Tampa',
    description:
      "We're knocking doors with Transit Now Tampa Bay to spread the word about our campaign and help elect Hillsborough County Commission candidates that support public transit! No experience needed.",
  },
  {
    id: 'weekly-2026-11-04',
    title: 'Weekly Campaign Call',
    dayLabel: 'Wednesday, November 4',
    shortDate: 'Wed, Nov 4',
    time: '7:00pm',
    location: 'Zoom',
    description:
      "Join us for our weekly campaign call, where we share updates, brainstorm, and work through certain items. All are welcome to join! No experience needed.",
  },
  {
    id: 'weekly-2026-11-06',
    title: 'Tabling at First Friday',
    dayLabel: 'Friday, November 6',
    shortDate: 'Fri, Nov 6',
    time: '7:00pm',
    location: 'Old Amtrak Station - 941 Railroad Ave Tallahassee, FL 32310',
    description:
      "We're tabling during First Friday to get more pledges. Join us! No experience needed.",
  },
];

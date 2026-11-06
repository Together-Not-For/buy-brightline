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
    id: 'weekly-2026-11-14',
    title: 'Canvassing',
    dayLabel: 'Saturday, November 14',
    shortDate: 'Sat, Nov 14',
    time: '1pm',
    location: 'Miami',
    description:
      "We're knocking on doors to get more pledges and spread the word about our campaign! No experience needed.",
  },
  {
    id: 'weekly-2026-11-11',
    title: 'Weekly Campaign Call',
    dayLabel: 'Wednesday, November 11',
    shortDate: 'Wed, Nov 11',
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
  {
    id: 'weekly-2027-1-15',
    title: 'MLK Train Hang',
    dayLabel: 'Friday, January 15',
    shortDate: 'Fri, Jan 15',
    time: '7:00pm',
    location: 'Orlando SunRail Station - 101 W. Livingston St., Orlando, FL 32801',
    description:
      "Our first train hang to celebrate MLK! Catch us on the SunRail. We'll ride it from Orlando to Maitland, hang out at some local, Black-owned spots, and then ride back to Orlando.",
  },
  {
    id: 'weekly-2027-1-16',
    title: 'Freedom to Ride',
    dayLabel: 'Saturday, January 17',
    shortDate: 'Sat, Jan 17',
    time: '7:00pm',
    location: 'Orlando and Tallahassee',
    description:
      "Stay tuned 👀👀",
  }
];

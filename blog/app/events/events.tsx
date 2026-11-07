export type UpcomingEvent = {
  id: string; // stable key — also what the sign-up form sends
  title: string;
  dayLabel: string; // "Monday, October 5"
  shortDate: string; // "Mon, Oct 5"
  date: string; // 'YYYY-MM-DD' — used for sorting and both labels
  time: string;
  location: string;
  description: string;
};

// Listed in date order. Edit these, and the left column and sign-up card both update.
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'weekly-2026-11-11',
    title: 'Weekly Campaign Call',
    dayLabel: 'Wednesday, November 11',
    shortDate: 'Wed, Nov 11',
    date: '2026-11-11',
    time: '7:00pm',
    location: 'Zoom',
    description:
      "Want to get involved on the campaign? Join us for our weekly campaign call, where we share updates, brainstorm, and work through certain items. All are welcome to join! No experience needed.",
  },
  {
    id: 'weekly-2026-11-14',
    title: 'Canvassing',
    dayLabel: 'Saturday, November 14',
    shortDate: 'Sat, Nov 14',
    date: '2026-11-14',
    time: '1pm',
    location: 'Miami',
    description:
      "We're knocking on doors to get more pledges and spread the word about our campaign! No experience needed.",
  },
  {
    id: 'weekly-2026-12-04',
    title: 'Tabling at First Friday',
    dayLabel: 'Friday, December 4',
    shortDate: 'Fri, Dec 4',
    date: '2026-12-04',
    time: '5:30pm',
    location: '621 Gallery - 650-3 Railroad Sq, Tallahassee, FL 32310',
    description:
      "We're tabling during First Friday to collect more pledges. Join us! No experience needed.",
  },
  {
    id: 'weekly-2027-1-15',
    title: 'MLK Train Hang',
    dayLabel: 'Friday, January 15',
    shortDate: 'Fri, Jan 15',
    date: '2027-01-15',
    time: '7:00pm',
    location: 'Orlando SunRail Station - 101 W. Livingston St., Orlando, FL 32801',
    description:
      "Our first train hang to celebrate MLK! Catch us on the SunRail. We'll ride it from Orlando to Maitland, hang out at some local, Black-owned spots, and then ride back to Orlando.",
  },
  {
    id: 'weekly-2027-1-16',
    title: 'Freedom to Ride',
    dayLabel: 'Saturday, January 16',
    shortDate: 'Sat, Jan 16',
    date: '2027-01-16',
    time: '7:00pm',
    location: 'Orlando and Tallahassee',
    description:
      "Stay tuned 👀👀",
  }
];

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
  {
    id: 'meeting-2026-10-14',
    title: "Weekly Campaign Call",
    dayLabel: 'Wednesday, October 14',
    shortDate: 'Wed, Oct 14',
    time: '7:00pm',
    location: 'Zoom',
    description:
      "Drop in to our weekly campaign call. All are welcome. No campaign experience is needed. We just need people like you who are willing to dream and put in the work to make Brightline public. Bring a friend (or make a new one)!",
  },
  {
    id: 'all-hands-2026-10-16',
    title: "Meeting with State Rep. Spencer's Office",
    dayLabel: 'Friday, October 16',
    shortDate: 'Fri, Oct 16',
    time: '2:00pm',
    location: 'TBD',
    description:
      "We're meeting with the office of State Representative Leonard Spencer about supporting our Buy Brightline campaign. There's strength in numbers, so please come and help show our campaign has real support.",
  },
];

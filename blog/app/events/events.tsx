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
    id: 'meeting-2026-10-28',
    title: "Meeting with State Rep. Franklin",
    dayLabel: 'Wednesday, October 28',
    shortDate: 'Wed, Oct 28',
    time: '1:30pm',
    location: 'Zoom',
    description:
      "We're meeting with State Representative Gallop Franklin about our campaign to buy Brightline's debt with our tax dollars. There's strength in numbers, so please come and help show our campaign has real support.",
  },
  {
    id: 'weekly-2026-10-28',
    title: 'Weekly Campaign Call',
    dayLabel: 'Wednesday, October 28',
    shortDate: 'Wed, Oct 28',
    time: '7:00pm',
    location: 'Zoom',
    description:
      'Drop in to learn more about the campaign and how you can join us to make Brightline public. All are welcome. No campaign experience is needed. We just need people like you who are willing to dream and put in the work to make Brightline public. Bring a friend (or make a new one)!',
  },
];
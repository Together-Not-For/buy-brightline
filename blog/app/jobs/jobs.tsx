export type Job = {
  id: string; // stable key — also what the sign-up form sends
  title: string;
  url: string;
  description; 
};

// Listed in date order. Edit these, and the left column and sign-up card both update.
export const jobListings: Job[] = [
  {
    id: 'intern-policy-and-research',
    title: 'Policy & Research Intern',
    url: '/pdfs/policy-and-research-intern.pdf',
    description: "This role is for you if you like to dig and get in the weeds.",
  },
  {
    id: 'intern-newsletter',
    title: 'Communications Intern',
    url: '/pdfs/communications-intern.pdf',
    description: "Like to write and tell stories that move people? Apply!",
  },
  {
    id: 'intern',
    title: 'Organizing & Campaign Manager',
    url: '/pdfs/campaign-manager.pdf',
    description: "We're looking for a campaign manager to work alongside our leader to help us build up this campaign and make some noise.",
  },
];

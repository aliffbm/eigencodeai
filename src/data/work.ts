// Every service and project on the site. Each entry gets its own page at /work/<slug>.
// To launch something, change its status from 'coming-soon' to 'available'.

export type Status = 'available' | 'coming-soon';
export type Group = 'services' | 'originals';

export interface WorkItem {
  slug: string;
  title: string;
  group: Group;
  status: Status;
  icon: string; // short symbol shown on the card
  summary: string; // one line, used on cards
  body: string[]; // paragraphs on the detail page
}

export const groups: Record<Group, { title: string; intro: string }> = {
  services: {
    title: 'Services',
    intro: 'Content we make for you.',
  },
  originals: {
    title: 'Our own content',
    intro: 'Things we make for ourselves, to learn from and have fun with.',
  },
};

export const work: WorkItem[] = [
  {
    slug: 'music',
    title: 'Music',
    group: 'services',
    status: 'available',
    icon: '♪',
    summary: 'Original songs and tracks.',
    body: [
      'We write and produce original music with AI tools, with people choosing the direction, the sound and the final cut.',
      'Tell us what the music is for and we will shape it to fit.',
    ],
  },
  {
    slug: 'videos',
    title: 'Videos',
    group: 'services',
    status: 'available',
    icon: '▶',
    summary: 'Videos for channels, brands and projects.',
    body: [
      'We make videos from script to finished edit, using AI where it helps and people where it matters.',
    ],
  },
  {
    slug: 'short-series',
    title: 'Short Series',
    group: 'services',
    status: 'available',
    icon: '◫',
    summary: 'Episodic short-form stories.',
    body: [
      'Short series are stories told in episodes, sized for the platforms people watch on.',
      'We plan the arc, make each episode and keep the look and voice consistent from one to the next.',
    ],
  },
  {
    slug: 'websites',
    title: 'Websites',
    group: 'services',
    status: 'available',
    icon: '⌂',
    summary: 'Fast, clean websites.',
    body: [
      'We design and build websites, from a single page to a full site, and hand them over ready to grow.',
    ],
  },
  {
    slug: 'apps',
    title: 'Apps',
    group: 'services',
    status: 'available',
    icon: '◧',
    summary: 'Apps and tools, built to fit.',
    body: [
      'We build apps and software tools. We use the same approach for the tools we run our own studio on.',
    ],
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    group: 'services',
    status: 'available',
    icon: '◎',
    summary: 'Posts, clips and content for your feeds.',
    body: [
      'We make content for social media: posts, short clips and series, shaped for each platform.',
    ],
  },
  {
    slug: 'learning',
    title: 'Learning',
    group: 'originals',
    status: 'coming-soon',
    icon: '✎',
    summary: 'Content that teaches something.',
    body: [
      'We are making our own learning content: things we wanted to understand, made into something others can learn from too.',
    ],
  },
  {
    slug: 'fun',
    title: 'Fun Stuff',
    group: 'originals',
    status: 'coming-soon',
    icon: '✦',
    summary: 'Things we make just because.',
    body: [
      'Not everything needs a reason. This is the content we make because we enjoy making it.',
    ],
  },
  {
    slug: 'behind-the-build',
    title: 'Behind the Build',
    group: 'originals',
    status: 'coming-soon',
    icon: 'λ',
    summary: 'Videos of the in-house tools we build our content with.',
    body: [
      'The content we make comes out of tools we build ourselves. In this series we will show those tools at work, and how a piece goes from idea to finished.',
    ],
  },
];

export const statusLabel: Record<Status, string> = {
  available: 'Available',
  'coming-soon': 'Coming soon',
};

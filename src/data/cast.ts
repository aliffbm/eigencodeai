// The on-screen cast, shared with the YouTube channel (source: ~/Claude Projects/eigencodeai-youtube).
// Images in public/cast/ are web-sized copies of the approved renders.

export const disclosure =
  'Characters, voices and visuals are AI-generated. Produced and reviewed by the EigenCodeAI team.';

export interface Member {
  slug: string;
  name: string;
  role: string;
  line: string;
  nod?: string; // where the name comes from
  image: string;
  alt: string;
  work?: string[]; // slugs in work.ts this member works on
}

export const hosts: Member[] = [
  {
    slug: 'eigen',
    name: 'Eigen',
    role: 'Co-host and mascot',
    line: 'An orb of light whose rays are its eigenvectors: the directions that hold steady while everything around them changes. Eigen can draw the approval check, but can never press publish.',
    image: '/cast/eigen.jpg',
    alt: 'Eigen, a glowing orb of blue and violet mist with a light-filled core, rays of light and two big round eyes',
  },
  {
    slug: 'kai',
    name: 'Kai',
    role: 'Co-host',
    line: 'The practical half of the double act: asks what you are thinking, tries the thing, and says so when it breaks. Short for Kairos, “the right moment”.',
    image: '/cast/kai.jpg',
    alt: 'Kai, a presenter with a dark asymmetric bob in a royal-blue jacket over an evergreen top',
  },
];

export const agents: Member[] = [
  {
    slug: 'iris',
    name: 'Iris',
    role: 'Coloring books',
    line: 'Draws coloring books page by page, and redraws the pages a person sends back.',
    nod: 'Named for the rainbow messenger.',
    image: '/cast/iris.jpg',
    alt: 'Iris, an illustrator with auburn waves and freckles, a stylus in her hair and a prism pendant',
    work: ['coloring-books'],
  },
  {
    slug: 'pax',
    name: 'Pax',
    role: 'KDP publishing',
    line: 'Turns a finished book into everything Amazon KDP needs: files, checks, the whole kit. A person approves the upload.',
    nod: 'Named for order and calm.',
    image: '/cast/pax.jpg',
    alt: 'Pax, with short grey-flecked hair and a silver vest, holding a tablet with a checklist',
    work: ['coloring-books'],
  },
  {
    slug: 'euterpe',
    name: 'Euterpe',
    role: 'Music',
    line: 'Writes and produces songs.',
    nod: 'Named for the muse of music.',
    image: '/cast/euterpe.jpg',
    alt: 'Euterpe, a performer with big natural curls in a royal-blue jacket, with a double flute on a strap',
    work: ['music'],
  },
  {
    slug: 'mira',
    name: 'Mira',
    role: 'Video',
    line: 'Makes the videos, from the first frame to the final cut.',
    nod: 'Named for a star that brightens and dims.',
    image: '/cast/mira.jpg',
    alt: 'Mira, a film maker with wavy hair and a beard in an evergreen utility jacket with a camera strap',
    work: ['videos', 'short-series'],
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    role: 'Buying guides',
    line: 'Buying guides and product comparisons: researched by Atlas, checked by a person.',
    nod: 'Named for the one who carries the world.',
    image: '/cast/atlas.jpg',
    alt: 'Atlas, with a grey crop and reading glasses, in an ochre field jacket with a messenger bag',
    work: ['buying-guides'],
  },
  {
    slug: 'argus',
    name: 'Argus',
    role: 'Research',
    line: 'Researches markets and trends and writes it up. A person makes the calls.',
    nod: 'Named for the watcher with a hundred eyes.',
    image: '/cast/argus.jpg',
    alt: 'Argus, with short black hair and round glasses in a black turtleneck, circled by small teal lenses showing charts',
  },
  {
    slug: 'calliope',
    name: 'Calliope',
    role: 'Stories',
    line: 'Stories and novels. Calliope drafts; the editor decides what stays.',
    nod: 'Named for the muse of epic poetry.',
    image: '/cast/calliope.jpg',
    alt: 'Calliope, with short white hair and red glasses in a grey cardigan, holding a stylus and a tablet',
    work: ['stories', 'short-series'],
  },
];

export const upcoming = [
  { name: 'Themis', role: 'Business affairs' },
  { name: 'Janus', role: 'YouTube' },
  { name: 'Hermes', role: 'Marketing and audience' },
];

export const castFor = (workSlug: string) => agents.filter((a) => a.work?.includes(workSlug));

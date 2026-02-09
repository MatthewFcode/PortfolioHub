export interface Projects {
  title: string
  github: string
  live?: string
  video: string
  tech: string[]
  description: string
}

export const projects: Projects[] = [
  {
    title: 'InsightStack',
    github: 'https://github.com/MatthewFcode/InsightStack',
    live: 'https://insightstack.borb.nz/',
    video: '/videos/insightstack.mp4',
    tech: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'SQLite3',
      'Knex.js',
      'Websockets',
      'Multer',
      'SCSS',
      'Auth0',
    ],
    description:
      'InsightStack is a posting platform for users to sign in and share their technical and human skills insights to others. I started building this before leaving Dev Academy because I wanted to give people a place to share what they had learned recently that was really valuable to them.',
  },
  {
    title: 'Echo',
    github: 'https://github.com/MatthewFcode/Echo',
    live: 'https://echo.borb.nz/',
    video: '/videos/echo.mp4',
    tech: [
      'TypeScript',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'SQLite3',
      'Knex.js',
      'Websockets',
      'Tailwind CSS',
      'Cloudinary',
      'SCSS',
      'Auth0',
    ],
    description:
      'Echo is a messaging platform that lets you add friends and have a real time conversation with someone. The main challenge was securing chat IDs so users cannot snoop into chats they are not part of.',
  },
  {
    title: 'FilmFeels',
    github: 'https://github.com/MatthewFcode/FilmFeel-API',
    live: 'https://filmfeels.borb.nz/',
    video: '/videos/filmfeels.mp4',
    tech: [
      'TypeScript',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'SQLite3',
      'Knex.js',
      'Websockets',
      'SCSS',
    ],
    description:
      'FilmFeels is an API that accepts POST and GET requests with automatic data enrichment. The biggest challenge was seeding the database by looping through a large movie list and enriching each entry via a third-party API.',
  },
  {
    title: 'MatchModel',
    github: 'https://github.com/MatthewFcode/PL-Match-Model',
    video: '/videos/matchmodel.mp4',
    tech: [
      'Python',
      'Machine Learning',
      'Feature Engineering',
      'Web Scraping',
      'Generative AI',
      'Flask APIs',
      'SQLite3',
      'TypeScript',
      'React.js',
      'Express.js',
      'SCSS',
    ],
    description:
      'Match Model is a map-based Premier League prediction app. The challenge was accuracy, which I improved by applying generative AI to revise datasets and filter illogical predictions.',
  },
  {
    title: 'ETNZ Dashboard',
    github: 'https://github.com/MatthewFcode/ETNZ-Dashboard',
    live: 'https://etnz-dashboard.borb.nz/',
    video: '/videos/etnz.mp4',
    tech: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'WebSockets',
      'Express.js',
      'Vite',
      'Knex.js',
      'SQLite3',
    ],
    description:
      'ETNZ is a mock live dashboard for displaying high-frequency data with low latency. The main challenge was state management across components, solved using React Context.',
  },
  {
    title: 'Don Foley CV Hub',
    github: 'https://github.com/MatthewFcode/Don-Foley-Hub',
    live: 'https://donfoley.borb.nz/',
    video: '/videos/etnz.mp4',
    tech: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Supabase',
      'LangChain',
      'Langfuse',
      'Express.js',
      'Vite',
    ],
    description:
      'A CV exploration hub with an AI chatbot built using RAG and Supabase. The main challenge was tuning chunk size and overlap for embedding CV documents into a vector database.',
  },
]

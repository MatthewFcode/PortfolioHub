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
    title: 'BuddyAI',
    github: 'https://github.com/MatthewFcode/BuddyAI',
    //live: '',
    video: '/videos/buddyai-ag.mp4',
    tech: [
      'Next.js',
      'Prisma',
      'Supabase',
      'Hugging Face',
      'LangChain',
      'Langfuse',
      'TypeScript',
      'JavaScript',
    ],
    description:
      'BuddyAI is an AI agent created for myself utlising the servless approach in Next.js. BuddyAI is a full stack TTS and STT agent that has access to a vector data store of my personal information and embeds these queries to provide accurate responses. Tools are also passed to the LLM manually utilising 3rd party APIs to action tasks like sending email when prompted. This project also features custom auth utilising for routes utilising the built in middleware function in Next.js and password encryption',
  },
  {
    title: 'ETNZ Race Hub',
    github: 'https://github.com/MatthewFcode/ETNZ-Dashboard',
    // live: 'https://etnz-dashboard.borb.nz/',
    video: '/videos/etnz-hub.mp4',
    tech: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'WebSockets',
      'Express.js',
      'Vite',
      'Knex.js',
      'SQLite3',
      'Langchain',
    ],
    description:
      'ETNZ hub is a live race hub that uses websockets and AI scripts to simulate live time race conversation between AI seeds. The diffuclty here was managing React re renders with high frequency Telemtric data coming from the script running in the server and then also managing websocket broadcasts.  ',
  },
  {
    title: 'Don Foley CV Hub',
    github: 'https://github.com/MatthewFcode/Don-Foley-Hub',
    live: 'https://donfoley.borb.nz/',
    video: '/videos/don-ag.mp4',
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
      'A CV hub built for my Father due to his experience becoming too much to visulaise cleanly on his CV. The hub features a AI chatbot built using RAG (local embedding models with Hugging Face) and Supabase. The main challenge was tuning chunk size and overlap for embedding CV documents into the vector database.',
  },
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
  // {
  //   title: 'Echo',
  //   github: 'https://github.com/MatthewFcode/Echo',
  //   live: 'https://echo.borb.nz/',
  //   video: '/videos/echo.mp4',
  //   tech: [
  //     'TypeScript',
  //     'JavaScript',
  //     'React.js',
  //     'Node.js',
  //     'Express.js',
  //     'SQLite3',
  //     'Knex.js',
  //     'Websockets',
  //     'Tailwind CSS',
  //     'Cloudinary',
  //     'SCSS',
  //     'Auth0',
  //   ],
  //   description:
  //     'Echo is a messaging platform that lets you add friends and have a real time conversation with someone. The main challenge was securing chat IDs so users cannot snoop into chats they are not part of.',
  // },
]

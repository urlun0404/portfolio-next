import { images } from '../../public/assets';

// const PROJECTS = [
//   {
//     name: 'portfolio',
//     caption: 'Portfolio',
//     src: images.portfolioNext,
//     alt: 'picture of Portfolio project',
//     link: {
//       github: 'https://github.com/urlun0404/portfolio-next',
//       demo: 'https://portfolio-next-jet.vercel.app/',
//     },
//     details: {
//       query: 'portfolio',
//     },
//   },
//   {
//     name: 'photo-gallery',
//     caption: 'Photo Gallery Website',
//     src: images.photoGallery,
//     alt: 'picture of Photo Gallery Website project',
//     link: {
//       github: 'https://github.com/urlun0404/photo-gallery-react',
//       demo: 'https://photo-gallery-react-gamma.vercel.app/',
//     },
//     details: {
//       query: 'photo-gallery',
//     },
//   },
//   {
//     name: 'github-search',
//     caption: 'GitHub Search',
//     src: images.githubSearch,
//     alt: 'picture of GitHub Search project',
//     link: {
//       github: 'https://github.com/urlun0404/github-api-react',
//       demo: 'https://github-restapi-react.netlify.app/',
//     },
//     details: {
//       query: 'github-search',
//     },
//   },
//   {
//     name: 'to-do-list',
//     caption: 'To Do List',
//     src: images.toToListJs,
//     alt: 'picture of Hawaii project',
//     link: {
//       github: 'https://github.com/urlun0404/todolist',
//       demo: 'https://todolist-project-urlun0404.netlify.app/',
//     },
//     details: {
//       query: 'hawaii',
//     },
//   },
//   {
//     name: 'taiwan-history-drama',
//     caption: 'Taiwan History  Drama',
//     src: images.taiwanHistoryDrama,
//     alt: 'picture of Taiwan History Drama project',
//     link: {
//       github: 'https://github.com/urlun0404/taiwan',
//       demo: 'https://taiwan-project-urlun0404.netlify.app/',
//     },
//     details: {
//       query: 'taiwan-history-drama',
//     },
//   },
// ] as const;

const PROJECTS = {
  portfolio: {
    name: 'portfolio',
    caption: 'Portfolio',
    src: images.portfolioNext,
    alt: 'picture of Portfolio project',
    link: {
      github: 'https://github.com/urlun0404/portfolio-next',
      demo: 'https://portfolio-next-jet.vercel.app/',
    },
    details: {
      query: 'portfolio',
    },
  },
  'photo-gallery': {
    name: 'photo-gallery',
    caption: 'Photo Gallery Website',
    src: images.photoGallery,
    alt: 'picture of Photo Gallery Website project',
    link: {
      github: 'https://github.com/urlun0404/photo-gallery-react',
      demo: 'https://photo-gallery-react-gamma.vercel.app/',
    },
    details: {
      query: 'photo-gallery',
    },
  },
  'github-search': {
    name: 'github-search',
    caption: 'GitHub Search',
    src: images.githubSearch,
    alt: 'picture of GitHub Search project',
    link: {
      github: 'https://github.com/urlun0404/github-api-react',
      demo: 'https://github-restapi-react.netlify.app/',
    },
    details: {
      query: 'github-search',
    },
  },
  'to-do-list': {
    name: 'to-do-list',
    caption: 'To Do List',
    src: images.toToListJs,
    alt: 'picture of Hawaii project',
    link: {
      github: 'https://github.com/urlun0404/todolist',
      demo: 'https://todolist-project-urlun0404.netlify.app/',
    },
    details: {
      query: 'hawaii',
    },
  },
  'taiwan-history-drama': {
    name: 'taiwan-history-drama',
    caption: 'Taiwan History  Drama',
    src: images.taiwanHistoryDrama,
    alt: 'picture of Taiwan History Drama project',
    link: {
      github: 'https://github.com/urlun0404/taiwan',
      demo: 'https://taiwan-project-urlun0404.netlify.app/',
    },
    details: {
      query: 'taiwan-history-drama',
    },
  },
} as const;

export default PROJECTS;

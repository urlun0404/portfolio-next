import { images } from '../../public/assets';

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
      skills: ['Next.js', 'React', 'styled-components', 'TypeScript'],
      features: [
        '彙整個人簡歷、技能樹、歷來作品集和聯絡資訊，並使用Next.js以伺服器渲染方式建置而成的響應式個人網站。',
        '網站目前在更新介面、其他個人資訊與重構程式碼當中。',
      ],
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
      skills: [
        'pixabay API',
        'React',
        'Redux',
        'styled-components',
        'React Router',
        'webpack',
      ],
      features: [
        '一個串接pixabay API及使用React、React Router和styled-components建置，並以Redux管理全域狀態的相片搜尋網站。',
        '網站首頁會預先載入15張pixabay的精選相片，使用者可以用首頁最上方的搜尋列搜尋特定主題的相片；若想看更多相片可至底點選「Load More」按鈕，網站會根據目前的搜尋主題或者pixabay隨機載入更多相片；此外，滑鼠移動至每張相片上方可點選「Details」按鈕查看相片的大圖、其他資訊和攝影師資訊，並提供相關的pixabay網站連結讓使用者能夠繼續使用pixabay API以外的其他服務。',
        '網站目前還在持續更新其他功能，預計會提供更多pixabay的其他相片搜尋方式及不同尺寸相片下載等服務。',
      ],
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
      skills: ['GitHub API', 'React', 'React Router', 'SaSS/SCSS'],
      features: [
        '一個串接 GitHub API，主要用來提供搜尋 GitHub 用戶 public repositories 功能，並以React建置的練習專案。',
        '搜尋功能方面除了可直接在網址列輸入 GitHub 用戶名稱，也可在首頁搜尋列鍵入用戶名稱搜尋；',
        '每位 GitHub 用戶的頁面會設羅列10個 public repositories，可向下捲動至最底部顯示該用戶的其他 repositories；另外，每個 repository 都可點選導向至詳細資料頁面，查看每個 repository 的 fullname、description、stars、forks 和 updated date。',
      ],
    },
  },
  'to-do-list': {
    name: 'to-do-list',
    caption: 'To Do List',
    src: images.toToListJs,
    alt: 'picture of To Do List project',
    link: {
      github: 'https://github.com/urlun0404/todolist',
      demo: 'https://todolist-project-urlun0404.netlify.app/',
    },
    details: {
      query: 'to-do-list',
      skills: ['HTML', 'SaSS/SCSS', 'JavaScript'],
      features: [
        '主要使用HTML、Sass和JavaScript建立代辦事項清單的練習網站，並結合local storage儲存待辦事項，可讓使用者重新開啟瀏覽器仍能看到待辦事項。',
        '網站除可新增、刪除待辦事項，也可點選勾選按鈕劃記已完成的事項，此外也以merge sort實作待辦事項按時間排序的功能。',
      ],
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
      skills: ['HTML', 'SaSS/SCSS', 'JavaScript'],
      features: [
        '一個主要使用HTML、Sass建置響應式臺灣歷史和相關時代劇介紹網站。',
        '首頁簡單概述臺灣歷史，包含清領以前、清領時期、日治時期、戰後民國的歷史，並且嵌入Google Map呈現臺灣的地理位置，而「清領時期」、「日治時期」、「戰後民國」三個分頁個別集結該時期的臺灣時代劇',
        '網站除了以響應式呈現，小尺寸螢幕使用CSS將導覽列設計成可收合的漢堡選單，並在各時代劇頁面考慮到小螢幕尺寸或是戲劇較多的狀況，以JavaScript實現捲動效果，滑鼠可移至頁面左右兩側浮現箭頭標誌，點選箭頭標誌可左右滑移卡片看該時期更多的戲劇簡介。',
      ],
    },
  },
} as const;

export default PROJECTS;

export type ProjectsKeys = keyof typeof PROJECTS;

// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'konstantinlokotunin', // Your GitHub org/user name. (This is the only required config)
  }, 
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: '⚡ Featured Projects',
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: { title: 'Data Analytics Portfolio', description: 'Designing data-driven systems that decode energy markets, time-series trends, and real-world dynamics through analytics and visualization.', imageURL: 'https://raw.githubusercontent.com/konstantinlokotunin/konstantinlokotunin/main/Github_Profile_Banner.png' },
  social: {
    linkedin: 'https://www.linkedin.com/in/konstantinlokotunin/',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://flowcv.me/konstantin-lokotunin',
    phone: '',
    email: 'konstantin.lokotunin@sciencespo.fr',
  },
  resume: {
    fileUrl:
      'https://flowcv.me/konstantin-lokotunin/Lebenslauf_Konstantin_LOKOTUNIN_EN-o20sjitmba.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Streamlit",
    "SQL",
    "ETL",
    "API ingestion"
    "Time Series Analysis",
    "Data Visualization",
  ],
  educations: [
    {
      institution: 'CODERS.BAY Vienna',
      degree: 'Diploma in Data Engineering & AI Development',
      from: '2026',
      to: 'Present',
      institutionLink: 'https://codersbay.wien',
    },
    {
      institution: 'Sciences Po Paris',
      degree: 'Double Master of Arts in International Energy',
      from: '2019',
      to: '2021',
      institutionLink: 'https://www.sciencespo.fr/en/',
    },
  ],
    experiences: [
    {
      company: 'BDO Assurance GmbH Wirtschaftsprüfungs- und Steuerberatungsgesellschaft',
      position: 'Senior Associate - ESG & Sustainability Services',
      from: 'January 2024',
      to: 'September 2025',
      companyLink: 'https://www.bdo.at/de-at/home-at',
    },
    {
      company: 'PwC Österreich GmbH Wirtschaftsprüfungsgesellschaft',
      position: 'Associate - ESG & Sustainability Services',
      from: 'September 2022',
      to: 'December 2023',
      companyLink: 'https://www.pwc.at',
    },
  ],
    certifications: [
    {
      name: 'IELTS overall score: 8.0 (CEFR C1)',
      body: 'British Council',
      year: 'October 2017',
      link: '',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `⚡ Built with data, designed for insight`,

  enablePWA: true,
};

export default CONFIG;

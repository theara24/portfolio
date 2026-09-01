export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services = [
  {
    title: 'Backend Developer',
    description: 'Building REST APIs, backend services, and business logic.',
    icon: '/fullsttack.webp',
  },
  {
    title: 'Software Engineer',
    description: 'Designing practical and maintainable software solutions.',
    icon: '/software-engineer.png',
  },
  {
    title: 'Full-Stack Developer',
    description: 'Building web applications across frontend and backend.',
    icon: '/full-stack-developer.png',
  },
  {
    title: 'Database & Systems',
    description:
      'Working with databases, APIs, distributed services, and system architecture.',
    icon: '/database-systems.png',
  },
];

export const technologies = [
  {
    name: 'HTML 5',
    icon: '/tech/html.png',
  },
  {
    name: 'CSS 3',
    icon: '/tech/css.webp',
  },
  {
    name: 'JavaScript',
    icon: '/tech/javascript.webp',
  },
  {
    name: 'TypeScript',
    icon: '/tech/typescript.webp',
  },
  {
    name: 'React JS',
    icon: '/tech/reactjs.webp',
  },
  {
    name: 'Redux Toolkit',
    icon: '/tech/redux.webp',
  },
  {
    name: 'Tailwind CSS',
    icon: '/tech/tailwind.webp',
  },
  {
    name: 'Node JS',
    icon: '/tech/nodejs.webp',
  },
  {
    name: 'MongoDB',
    icon: '/tech/mongodb.webp',
  },
  {
    name: 'Three JS',
    icon: '/tech/threejs.webp',
  },
  {
    name: 'git',
    icon: '/tech/git.webp',
  },
  {
    name: 'figma',
    icon: '/tech/figma.webp',
  },
  {
    name: 'docker',
    icon: '/tech/docker.png',
  },
  {
    name: 'postgres',
    icon: '/tech/postgres.png',
  },
  {
    name: 'my_sql',
    icon: '/tech/my_sql.png',
  },
  {
    name: 'java',
    icon: '/tech/java.png',
  },
  {
    name: 'c',
    icon: '/tech/c.png',
  },
  {
    name: 'c_shap',
    icon: '/tech/c_shap.png',
  },
  {
    name: 'spring',
    icon: '/tech/spring.png',
  },
  {
    name: 'vue',
    icon: '/tech/vue.png',
  },
  {
    name: 'angular',
    icon: '/tech/angular.png',
  },
  {
    name: 'NGINX_web_server',
    icon: '/tech/NGINX_web_server.png',
  },
  {
    name: 'project_management',
    icon: '/tech/project_management.png',
  },
  {
    name: 'wordpress',
    icon: '/tech/wordpress.webp',
  },
];

const experiences = [
  {
    title: 'Junior Backend Developer',
    company_name: 'Everlast Information & Apps Dev Co., Ltd.',
    icon: '/backend.webp',
    iconBg: '#383E56',
    date: '2025 - Present',
    points: [
      'Design, develop, and maintain REST APIs and backend services using TypeScript, Node.js, and Express.js.',
      'Contribute to production systems involving omnichannel messaging, distributed services, and high-concurrency workflows.',
      'Work with microservice and monorepo architectures and asynchronous communication using RabbitMQ.',
      'Implement transaction management, concurrency control, background processing, caching, and distributed service communication.',
      'Work with PostgreSQL, MongoDB, MySQL, and Redis for data persistence and backend workflows.',
      'Integrate third-party APIs and external messaging platforms into backend services.',
      'Use Docker, Nginx, Portainer, CI/CD, and Linux-based environments for deployment and service management.',
      'Participate in code reviews, testing, debugging, performance optimization, security improvements, and production troubleshooting.',
    ],
  },
  {
    title: 'Freelance Web Designer & Full-Stack Developer',
    company_name: 'Self-Employed',
    icon: '/company/web.png',
    iconBg: '#E6DEDD',
    date: '2024 - Present',
    points: [
      'Develop responsive web applications using React.js, Tailwind CSS, and modern web technologies.',
      'Design user interfaces and responsive layouts based on project requirements.',
      'Collaborate with clients and team members to deliver practical, user-focused digital products.',
      'Focus on clean implementation, usability, responsiveness, and maintainable code.',
    ],
  },
  {
    title: 'Work Study Student',
    company_name: 'ISTAD / SETEC Institute',
    icon: '/company/frontend.png',
    iconBg: '#383E56',
    date: '2024 - Present',
    points: [
      'Developed practical skills in web development, programming, databases, UI/UX, and information systems through academic and project-based work.',
      'Built frontend applications using React, Tailwind CSS, Bootstrap, and JavaScript.',
      'Developed full-stack and console applications using Java, OOP, MVC, JDBC, and QR payment systems.',
      'Worked with PostgreSQL, MySQL, and MongoDB for database design and data management.',
      'Collaborated on projects including JobFinder, Carify, FoodPanda Clone, Scholarship Portal, SQL Server Management Tool, and POS System.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'GitHub is a web-based platform used for version control and collaboration. It allows developers to work together on projects from anywhere.',
    name: 'Theara Chim',
    image: '/socialmedia/github.png',
    link: 'https://github.com/theara24',
  },
  {
    testimonial:
      'LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.',
    name: 'Theara Chim',
    image: '/socialmedia/linkedin.svg',
    link: 'https://www.linkedin.com/in/theara-chim-971845341/',
  },
  {
    testimonial:
      'Telegram is a cloud-based instant messaging and voice over IP service. It allows you to send messages and exchange files.',
    name: 'Theara Chim',
    image: '/socialmedia/telegram.png',
    link: 'https://t.me/chim_theara',
  },
];

type ProjectCategory = 'Professional' | 'Personal' | 'University';

interface Project {
  name: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  context?: string;
  features?: string[];
  role?: string;
  status?: string;
  date?: string;
  company?: string;
  confidentialNote?: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link?: string;
  platform?: string;
  featured?: boolean;
  sortOrder?: number;
}

const projects: Project[] = [
  {
    name: 'Omnichannel Messaging Platform',
    category: 'Professional',
    description:
      'Backend development for an internal omnichannel messaging platform integrating WhatsApp, Telegram, LINE, and Messenger with a central customer-support platform.',
    context:
      'Contributed to backend services for message processing, asynchronous workflows, multi-tenant logic, media handling, REST APIs, external channel integrations, and two-way message synchronization.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Message processing',
      'External channel integrations',
      'Two-way synchronization',
      'Multi-tenant services',
    ],
    role: 'Backend Developer',
    status: 'Professional Project',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — implementation details are confidential.',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'pink-text-gradient',
      },
      {
        name: 'Redis',
        color: 'pink-text-gradient',
      },
      {
        name: 'BullMQ',
        color: 'pink-text-gradient',
      },
      {
        name: 'Docker',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/Omnichannel-Messaging-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 1,
  },
  {
    name: 'HashGame — Admin & Client Platform',
    category: 'Professional',
    description:
      'Full-stack development across Client Web, Client API, Admin Web, and Admin API for an internal gaming platform.',
    context:
      'Contributed across frontend interfaces, API integrations, backend logic, and application features for both client and administration platforms.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Client Web',
      'Client API',
      'Admin Web',
      'Admin API',
    ],
    role: 'Backend + Frontend Developer',
    status: 'Professional Project',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — implementation details are confidential.',
    tags: [
      {
        name: 'Vue.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Vuex',
        color: 'blue-text-gradient',
      },
      {
        name: 'Element UI',
        color: 'pink-text-gradient',
      },
      {
        name: 'Vue Router',
        color: 'blue-text-gradient',
      },
      {
        name: 'i18n',
        color: 'green-text-gradient',
      },
      {
        name: 'Laravel',
        color: 'pink-text-gradient',
      },
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'REST APIs',
        color: 'pink-text-gradient',
      },
    ],
    image: '/projectimg/HashGame-Admin&Clien-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 2,
  },
  {
    name: 'Voting & Wallet Platform',
    category: 'Professional',
    description:
      'Full-stack development for a TypeScript-based voting platform covering Client Web, Client API, Admin Web, and Admin API.',
    context:
      'Focused primarily on backend development, contributing to platform architecture, APIs, voting workflows, authentication, transactional services, asynchronous processing, and supporting frontend development.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Voting workflows',
      'Authentication',
      'Admin APIs',
      'Transactional services',
    ],
    role: 'Backend + Frontend Developer',
    status: 'Professional Project',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — implementation details are confidential.',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'Knex.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'RabbitMQ',
        color: 'pink-text-gradient',
      },
      {
        name: 'Redis',
        color: 'pink-text-gradient',
      },
      {
        name: 'BullMQ',
        color: 'blue-text-gradient',
      },
      {
        name: 'JWT',
        color: 'green-text-gradient',
      },
    ],
    image: '/projectimg/Voting&Wallet-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 3,
  },
  {
    name: 'Customized Chatwoot Support Platform',
    category: 'Professional',
    description:
      'Backend development for a customized, multi-tenant customer-support platform based on Chatwoot.',
    context:
      'Contributed to API development, real-time communication, agent workflows, access control, backend reliability, performance improvements, and platform hardening.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Real-time communication',
      'Agent workflows',
      'Platform integrations',
      'Security hardening',
    ],
    role: 'Backend Developer',
    status: 'Professional Project',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — implementation details are confidential.',
    tags: [
      {
        name: 'Ruby',
        color: 'pink-text-gradient',
      },
      {
        name: 'Ruby on Rails',
        color: 'pink-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redis',
        color: 'pink-text-gradient',
      },
      {
        name: 'Sidekiq',
        color: 'pink-text-gradient',
      },
      {
        name: 'ActionCable',
        color: 'blue-text-gradient',
      },
      {
        name: 'REST APIs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Docker',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/Customized-Chatwoot-Support-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 4,
  },
  {
    name: 'POS System - Point of Sale',
    category: 'Personal',
    description:
      'A complete point of sale system for retail businesses with inventory management, sales tracking, and reporting features. Built with modern web technologies and responsive design.',
    longDescription: 'Not available',
    features: [
      'Inventory management',
      'Sales tracking',
      'Reporting',
    ],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    company: 'Personal',
    tags: [
      {
        name: 'Vue.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/pos.png',
    source_code_link: 'https://github.com/theara24/POS-System.git',
    deploy_link: undefined,
    platform: 'Not available',
    featured: false,
    sortOrder: 5,
  },
  {
    name: 'SQL Server Management Tool',
    category: 'Personal',
    description:
      'A web-based SQL Server management tool with query execution, database visualization, and performance monitoring. Features include query history, export functionality, and user management.',
    longDescription: 'Not available',
    features: [
      'Query execution',
      'Database visualization',
      'Performance monitoring',
    ],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    company: 'Personal',
    tags: [
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'SQL Server',
        color: 'pink-text-gradient',
      },
    ],
    image: '/projectimg/sql_sever.png',
    source_code_link: 'https://github.com/theara24/POS_SQLServer.git',
    deploy_link: undefined,
    platform: 'Not available',
    featured: false,
    sortOrder: 6,
  },
  {
    name: 'C++ Learning Platform',
    category: 'Personal',
    description:
      'An interactive learning platform for C++ programming with coding challenges, tutorials, and progress tracking. Features include code editor, compiler integration, and user progress analytics.',
    // TODO: Verify project identity and repository before final portfolio publication.
    longDescription: 'Not available',
    features: ['Not available'],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    company: 'Personal',
    tags: [
      {
        name: 'C++',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/c.png',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: false,
    sortOrder: 7,
  },
  {
    name: 'EasyFound - Lost & Found Platform',
    category: 'University',
    description:
      'A comprehensive lost and found platform built with React and Node.js, featuring user authentication, image upload, and real-time notifications. Users can post lost items and search for found items with advanced filtering.',
    longDescription: 'Not available',
    features: [
      'User authentication',
      'Image upload',
      'Real-time notifications',
      'Search and filtering',
    ],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/easyfound.png',
    source_code_link: undefined,
    deploy_link: 'https://ezfound-deploy.vercel.app/',
    platform: 'Vercel',
    featured: false,
    sortOrder: 8,
  },
  {
    name: 'JobSeek - Job Portal',
    category: 'University',
    description:
      'A modern job portal with advanced search functionality, company profiles, and application tracking. Built with Next.js and featuring responsive design, user authentication, and admin dashboard.',
    longDescription: 'Not available',
    features: [
      'Advanced search',
      'Company profiles',
      'Application tracking',
      'Admin dashboard',
    ],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/jobseek.png',
    source_code_link: 'https://github.com/SisovandaraKong/Web-F3.git',
    deploy_link: undefined,
    platform: 'Vercel',
    featured: false,
    sortOrder: 9,
  },
  {
    name: 'DocuHub - Document Management',
    category: 'University',
    description:
      'A secure document management system with file upload, categorization, and sharing capabilities. Features include user roles, document versioning, and search functionality.',
    longDescription: 'Not available',
    features: [
      'File upload',
      'Categorization',
      'Sharing',
      'User roles',
      'Versioning',
      'Search',
    ],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'Material-UI',
        color: 'pink-text-gradient',
      },
      {
        name: 'Redux',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/docuhub.png',
    source_code_link: undefined,
    deploy_link: 'https://deploy-docu-hub-frontend.vercel.app/',
    platform: 'Vercel',
    featured: false,
    sortOrder: 10,
  },
  {
    name: 'EasyFound - Ux Ui',
    category: 'University',
    description:
      'Figma UI/UX design for the EasyFound lost and found platform.',
    longDescription: 'Not available',
    features: [],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    tags: [
      {
        name: 'Figma',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/easyfoundui.png',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Figma',
    featured: false,
    sortOrder: 11,
  },
  {
    name: 'JobSeek - Ux Ui',
    category: 'University',
    description:
      'Figma UI/UX design for the JobSeek job portal.',
    longDescription: 'Not available',
    features: [],
    role: 'Not verified',
    status: 'Not available',
    date: 'Not available',
    tags: [
      {
        name: 'Figma',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/jobseekui.png',
    source_code_link: undefined,
    deploy_link:
      'https://www.figma.com/design/xtMOvFfMJVKh1zoiOUKBk4/F3-Project?node-id=0-1&t=Pex5WD5eefpBhI8E-1',
    platform: 'Figma',
    featured: false,
    sortOrder: 12,
  },
];

export { experiences, testimonials, projects };

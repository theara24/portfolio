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
    description:
      'Designing and building scalable backend services, REST APIs, microservices, and database systems.',
    icon: '/fullsttack.webp',
  },
  {
    title: 'Software Engineer',
    description:
      'Architecting maintainable, reliable, and high-performance software solutions for business requirements.',
    icon: '/software-engineer.png',
  },
  {
    title: 'Full-Stack Developer',
    description:
      'Developing end-to-end web applications across backend APIs, frontend UIs, and real-time features.',
    icon: '/full-stack-developer.png',
  },
  {
    title: 'Database & Systems',
    description:
      'Optimizing relational & NoSQL databases, caching layers, message queues, and distributed architectures.',
    icon: '/database-systems.png',
  },
];

export const technologies = [
  {
    name: 'TypeScript',
    icon: '/tech/typescript.webp',
  },
  {
    name: 'Node JS',
    icon: '/tech/nodejs.webp',
  },
  {
    name: 'Express JS',
    icon: '/tech/express.png',
  },
  {
    name: 'PostgreSQL',
    icon: '/tech/postgres.png',
  },
  {
    name: 'MongoDB',
    icon: '/tech/mongodb.webp',
  },
  {
    name: 'MySQL',
    icon: '/tech/my_sql.png',
  },
  {
    name: 'Redis',
    icon: '/tech/redis.png',
  },
  {
    name: 'RabbitMQ',
    icon: '/tech/rabbitmq.png',
  },
  {
    name: 'Docker',
    icon: '/tech/docker.png',
  },
  {
    name: 'React JS',
    icon: '/tech/reactjs.webp',
  },
  {
    name: 'Vue JS',
    icon: '/tech/vue.png',
  },
  {
    name: 'git',
    icon: '/tech/git.webp',
  },
];

const experiences = [
  {
    title: 'Junior Backend Developer',
    company_name: 'Everlast Information & Apps Dev Co., Ltd.',
    icon: '/backend.webp',
    iconBg: '#383E56',
    date: '2025 – 2026',
    points: [
      'Designed, developed, and maintained REST APIs and core backend services using TypeScript, Node.js, and Express.js.',
      'Contributed to backend systems involving omnichannel messaging, distributed microservices, monorepos, and high-concurrency workflows.',
      'Implemented transactional management, concurrency controls, background job processing (BullMQ), caching (Redis), and message queues (RabbitMQ).',
      'Engineered data persistence and optimization across PostgreSQL, MySQL, and MongoDB databases.',
      'Integrated third-party APIs and messaging platforms including Telegram, WhatsApp, LINE, and Messenger into backend services.',
      'Configured Docker, Docker Swarm, Nginx, Linux, and CI/CD pipelines for deployment, service management, and containerized hosting.',
      'Developed Python automation scripts, Telegram bots, and AI/LLM API integrations to enhance operational workflows.',
      'Participated in code reviews, testing, performance tuning, security enhancements, and production environment troubleshooting.',
    ],
  },
  {
    title: 'Freelance Full-Stack Developer / Independent Projects',
    company_name: 'Independent Projects',
    icon: '/company/web.png',
    iconBg: '#E6DEDD',
    date: '2024 – Present',
    points: [
      'Developed responsive web applications using React.js, Tailwind CSS, and modern web technologies.',
      'Implemented frontend functionality and integrated application components with backend APIs.',
      'Developed Python automation scripts and Telegram bots for task automation and API integration.',
      'Developed AI chatbot and automation solutions using AI/LLM technologies and APIs.',
    ],
  },
  {
    title: 'Practical Training & Academic Projects',
    company_name: 'ISTAD & SETEC Institute',
    icon: '/company/frontend.png',
    iconBg: '#383E56',
    date: '2023 – Present',
    points: [
      'Built academic and practical projects using Java, C#, JavaScript, TypeScript, React, Vue, Angular, Node.js, Express.js, Spring, PostgreSQL, and MySQL.',
      'Applied database design, API development, system analysis, responsive UI development, and version control through hands-on projects.',
      'Collaborated with project teams and strengthened skills in debugging, problem-solving, and software development.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'GitHub is a web-based platform used for version control and collaboration. Explore my open-source projects and code repositories.',
    name: 'Theara Chim',
    image: '/socialmedia/github.png',
    link: 'https://github.com/theara24',
  },
  {
    testimonial:
      'LinkedIn is a professional social media network. Connect with me for professional background and software engineering roles.',
    name: 'Theara Chim',
    image: '/socialmedia/linkedin.svg',
    link: 'https://www.linkedin.com/in/theara-chim-971845341/',
  },
  {
    testimonial:
      'Telegram is an instant messaging service. Reach out directly for project inquiries, technical discussions, or opportunities.',
    name: 'Theara Chim',
    image: '/socialmedia/telegram.png',
    link: 'https://t.me/chim_theara',
  },
];

export type ProjectCategory = 'Professional' | 'Personal' | 'Academic';

export interface Project {
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
  backend_code_link?: string;
  deploy_link?: string;
  admin_deploy_link?: string;
  backend_api_link?: string;
  swagger_link?: string;
  admin_swagger_link?: string;
  platform?: string;
  featured?: boolean;
  sortOrder?: number;
}

const projects: Project[] = [
  /* ---------------- PROFESSIONAL WORK (1-5) ---------------- */
  {
    name: 'Customized Chatwoot',
    category: 'Professional',
    description:
      'Backend engineering and feature enhancements for a customized, multi-tenant customer-support platform based on Chatwoot.',
    context:
      'Contributed to backend REST APIs, real-time messaging via ActionCable, background job execution using Sidekiq & Redis, PostgreSQL query tuning, and messaging channel workflows (Telegram, WhatsApp, Messenger).',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Real-time ActionCable',
      'Sidekiq Background Jobs',
      'PostgreSQL Optimization',
      'Multi-Tenant Workflows',
      'Python Automation Scripts',
    ],
    role: 'Backend Developer',
    status: 'Professional Project — Confidential',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — source code and internal environment are confidential.',
    tags: [
      {
        name: 'Ruby on Rails',
        color: 'pink-text-gradient',
      },
      {
        name: 'Vue.js',
        color: 'green-text-gradient',
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
        name: 'Telegram',
        color: 'green-text-gradient',
      },
      {
        name: 'WhatsApp',
        color: 'green-text-gradient',
      },
      {
        name: 'Messenger',
        color: 'blue-text-gradient',
      },
      {
        name: 'Python',
        color: 'green-text-gradient',
      },
    ],
    image: '/projectimg/Customized-Chatwoot-Support-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 1,
  },
  {
    name: 'Customer Services',
    category: 'Professional',
    description:
      'Backend development for an internal omnichannel customer services messaging platform integrating Telegram, WhatsApp, and microservice architectures.',
    context:
      'Focused on backend REST APIs, microservices, message processing routines, database operations, monorepo architecture, and asynchronous message delivery with RabbitMQ.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'REST APIs & Microservices',
      'RabbitMQ Queue Processing',
      'Messaging Integrations',
      'Monorepo Architecture',
    ],
    role: 'Backend Developer',
    status: 'Professional Project — Confidential',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — source code and internal environment are confidential.',
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
        color: 'pink-text-gradient',
      },
      {
        name: 'RabbitMQ',
        color: 'pink-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Microservices',
        color: 'pink-text-gradient',
      },
      {
        name: 'Telegram',
        color: 'green-text-gradient',
      },
      {
        name: 'WhatsApp',
        color: 'green-text-gradient',
      },
    ],
    image: '/projectimg/Omnichannel-Messaging-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 2,
  },
  {
    name: 'Customer Services V2',
    category: 'Professional',
    description:
      'Backend APIs and queue processing architecture for next-generation messaging services handling Telegram, WhatsApp, LINE, and Messenger integrations.',
    context:
      'Focused on high-performance queue processing with Redis and BullMQ, MinIO object storage, Docker Swarm infrastructure, multi-channel messaging integrations, and Python automation tools.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Redis & BullMQ Processing',
      'MinIO Object Storage',
      'Docker Swarm Infrastructure',
      'Python Automation',
      'Multi-Channel Messaging',
    ],
    role: 'Backend Developer',
    status: 'Professional Project — Confidential',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — source code and internal environment are confidential.',
    tags: [
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'Redis',
        color: 'pink-text-gradient',
      },
      {
        name: 'BullMQ',
        color: 'green-text-gradient',
      },
      {
        name: 'MinIO',
        color: 'blue-text-gradient',
      },
      {
        name: 'Docker Swarm',
        color: 'blue-text-gradient',
      },
      {
        name: 'Telegram',
        color: 'green-text-gradient',
      },
      {
        name: 'WhatsApp',
        color: 'green-text-gradient',
      },
      {
        name: 'LINE',
        color: 'green-text-gradient',
      },
      {
        name: 'Messenger',
        color: 'blue-text-gradient',
      },
      {
        name: 'Python',
        color: 'green-text-gradient',
      },
    ],
    image: '/projectimg/Omnichannel-Messaging-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 3,
  },
  {
    name: 'Hash Game',
    category: 'Professional',
    description:
      'Full-stack development across Client Web, Client API, Admin Web, and Admin API for a real-time gaming platform.',
    context:
      'Worked personally on BOTH backend and frontend. Built REST APIs, handled database operations, integrated TRON blockchain API, implemented real-time communication via WebSockets (Pusher), and secured user endpoints with JWT/Sanctum authentication.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Client & Admin APIs',
      'TRON API Integration',
      'WebSockets (Pusher) Real-time',
      'JWT / Sanctum Auth',
      'Database Operations',
    ],
    role: 'Full-Stack Developer (Backend + Frontend)',
    status: 'Professional Project — Confidential',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — source code and internal environment are confidential.',
    tags: [
      {
        name: 'Laravel',
        color: 'pink-text-gradient',
      },
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'TRON API',
        color: 'pink-text-gradient',
      },
      {
        name: 'Pusher',
        color: 'pink-text-gradient',
      },
      {
        name: 'WebSockets',
        color: 'green-text-gradient',
      },
      {
        name: 'JWT/Sanctum',
        color: 'green-text-gradient',
      },
    ],
    image: '/projectimg/HashGame-Admin&Clien-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 4,
  },
  {
    name: 'Voting System',
    category: 'Professional',
    description:
      'Full-stack development for a high-concurrency TypeScript voting platform covering Client Web, Client API, Admin Web, and Admin API.',
    context:
      'Worked personally on BOTH backend and frontend. Contributed to API engineering, transactional services, database schema operations, RabbitMQ message passing, wallet integrations, API security using HMAC-SHA256, and concurrency control via Reservation Pattern.',
    longDescription:
      'Company proprietary project — implementation details are confidential.',
    features: [
      'Voting API Workflows',
      'Wallet Integration',
      'RabbitMQ Communication',
      'Reservation Pattern Concurrency',
      'HMAC-SHA256 Security',
    ],
    role: 'Full-Stack Developer (Backend + Frontend)',
    status: 'Professional Project — Confidential',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    confidentialNote:
      'Company proprietary project — source code and internal environment are confidential.',
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
        color: 'pink-text-gradient',
      },
      {
        name: 'RabbitMQ',
        color: 'pink-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Wallet Integration',
        color: 'green-text-gradient',
      },
      {
        name: 'HMAC-SHA256',
        color: 'green-text-gradient',
      },
      {
        name: 'Reservation Pattern',
        color: 'pink-text-gradient',
      },
    ],
    image: '/projectimg/Voting&Wallet-Platform.jpg',
    source_code_link: undefined,
    deploy_link: undefined,
    platform: 'Not available',
    featured: true,
    sortOrder: 5,
  },

  /* ---------------- ACADEMIC PROJECTS ---------------- */
  {
    name: 'JobSeek - Job Portal',
    category: 'Academic',
    description:
      'A modern job portal built as a university project with advanced search functionality, company profiles, application tracking, and an admin dashboard.',
    context:
      'Built using Next.js, TypeScript, and Prisma for academic coursework. Implemented search filters, user authentication, company management, and responsive UI layouts.',
    features: [
      'Advanced Search & Filtering',
      'Company Profiles',
      'Application Tracking',
      'Admin Management Dashboard',
    ],
    role: 'Full-Stack Developer',
    status: 'Academic Project',
    company: 'SETEC Institute',
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
        name: 'React',
        color: 'blue-text-gradient',
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
  },
  {
    name: 'EasyFound - Lost & Found Platform',
    category: 'Academic',
    description:
      'A comprehensive lost and found web application built as an academic project with React and Node.js, featuring user authentication, image upload, and real-time notifications.',
    context:
      'Developed user authentication flow, file attachment uploads, item search filters, and real-time user notifications for university project presentation.',
    features: [
      'User Authentication',
      'Image Upload',
      'Real-time Notifications',
      'Search & Filtering',
    ],
    role: 'Full-Stack Developer',
    status: 'Academic Project',
    company: 'SETEC Institute',
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
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/easyfound.png',
    source_code_link: 'https://github.com/preuniversity1stscholarship/services-listing-website.git',
    deploy_link: 'https://ezfound-deploy.vercel.app/',
    platform: 'Vercel',
    featured: false,
  },
  {
    name: 'DocuHub - Document Management',
    category: 'Academic',
    description:
      'A secure document management system built as an academic project with file upload, categorization, and sharing capabilities.',
    context:
      'Developed user roles, document categorization, file attachment management, versioning control, and search functionality across frontend and backend services.',
    features: [
      'File Upload & Categorization',
      'Document Sharing & Roles',
      'Document Versioning',
      'Search & Filtering',
    ],
    role: 'Full-Stack Developer',
    status: 'Academic Project',
    company: 'SETEC Institute',
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
    source_code_link: 'https://github.com/FSWD-GEN-01/ipub-frontend.git',
    backend_code_link: 'https://github.com/FSWD-GEN-01/ipub-engine-backend.git',
    deploy_link: 'https://deploy-docu-hub-frontend.vercel.app/',
    platform: 'Vercel',
    featured: false,
  },
  {
    name: 'Civil Management System (C++)',
    category: 'Academic',
    description:
      'A C++ console application developed to efficiently manage civil servant data with Admin and User roles, attendance tracking, salary calculation, and binary file handling.',
    context:
      'Features Admin Panel (Add, View, Sort, Search, Update, Delete civil servants, Attendance & Time management, Salary calculation, Reports) and User Panel (View, Sort, Search, Attendance & Salary overview, Reporting).',
    features: [
      'Admin & User Roles',
      'Attendance & Time Management',
      'Salary Calculation Engine',
      'Binary File Data Storage',
      'Civil Servant Reporting',
    ],
    role: 'Software Developer',
    status: 'Academic Project',
    company: 'SETEC Institute',
    tags: [
      {
        name: 'C++',
        color: 'blue-text-gradient',
      },
      {
        name: 'DEV C++',
        color: 'green-text-gradient',
      },
      {
        name: 'Binary File Handling',
        color: 'pink-text-gradient',
      },
      {
        name: 'OOP',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/c.png',
    source_code_link: 'https://github.com/theara24/Employee-Management-System.git',
    deploy_link: undefined,
    platform: 'Console App',
    featured: false,
  },

  /* ---------------- PERSONAL PROJECTS ---------------- */
  {
    name: 'TaskBoard',
    category: 'Personal',
    description:
      'A production full-stack task and project management application with user authentication, project workflows, Zustand state management, and schema-validated Express REST APIs.',
    context:
      'Independently built frontend and backend services. Features Zustand state store, Prisma ORM PostgreSQL queries, Zod schema validation, JWT authentication, and interactive Swagger API documentation.',
    features: [
      'Interactive Swagger API Documentation',
      'Full-Stack Task & Project Management',
      'User Roles & Project Membership',
      'Zustand State Management',
      'Prisma ORM & PostgreSQL',
      'Zod & JWT Security',
    ],
    role: 'Full-Stack Developer',
    status: 'Personal Production Project',
    company: 'Personal Project',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Vite',
        color: 'purple-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Zustand',
        color: 'blue-text-gradient',
      },
      {
        name: 'React Router',
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
        name: 'Prisma',
        color: 'pink-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'Zod',
        color: 'green-text-gradient',
      },
      {
        name: 'Swagger UI',
        color: 'green-text-gradient',
      },
    ],
    image: '/projectimg/taskboard.png',
    source_code_link: 'https://github.com/theara24/Taskboard-Web.git',
    backend_code_link: 'https://github.com/theara24/Taskboard-Api',
    deploy_link: 'https://taskboard-setec.vercel.app',
    backend_api_link: 'https://taskboard-api-0gtw.onrender.com',
    swagger_link: 'https://taskboard-api-0gtw.onrender.com/api-docs',
    platform: 'Vercel & Render',
    featured: false,
  },
  {
    name: 'CinePremium',
    category: 'Personal',
    description:
      'Movie ticket reservation and digital payment ecosystem featuring Client Portal, Admin Portal, Client REST API, Admin REST API, and ABA PayWay Sandbox payment integration.',
    context:
      'Engineered multi-portal web applications and backend APIs with Render deployments, payment callback transaction handling, payment hash validations, and Swagger API documentation.',
    features: [
      'Client Portal & Admin Portal',
      'Client API & Admin API',
      'ABA PayWay Sandbox Payment Integration',
      'Client & Admin Swagger API Docs',
      'Payment Transaction Security',
    ],
    role: 'Full-Stack Developer',
    status: 'Personal Project',
    company: 'Personal Project',
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
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'ABA PayWay API',
        color: 'green-text-gradient',
      },
      {
        name: 'Render',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swagger Docs',
        color: 'green-text-gradient',
      },
    ],
    image: '/projectimg/cinepremium.png',
    source_code_link: 'https://gitlab.com/theara24-group/movie-tickets-booking.git',
    deploy_link: 'https://movie-tickets-booking-1gfu.onrender.com',
    admin_deploy_link: 'https://movie-tickets-booking-1-1t24.onrender.com',
    backend_api_link: 'https://movie-tickets-booking-85p9.onrender.com',
    swagger_link: 'https://movie-tickets-booking-85p9.onrender.com/api/docs',
    admin_swagger_link: 'https://movie-tickets-booking-1-e3yd.onrender.com/api/docs',
    platform: 'Render & GitLab',
    featured: false,
  },
  {
    name: 'POS System - Point of Sale',
    category: 'Personal',
    description:
      'A point of sale system for retail businesses with inventory management, sales tracking, and transaction reporting features.',
    features: [
      'Inventory Management',
      'Sales Tracking',
      'Transaction Reporting',
    ],
    role: 'Software Developer',
    status: 'Personal Project',
    company: 'Personal Project',
    tags: [
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: '.NET',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/pos.png',
    source_code_link: 'https://github.com/theara24/POS-System.git',
    deploy_link: undefined,
    platform: 'Not available',
    featured: false,
  },
  {
    name: 'SQL Server Management Tool',
    category: 'Personal',
    description:
      'A database utility tool for SQL Server management featuring query execution, database schema visualization, and export utilities.',
    features: [
      'Query Execution',
      'Database Schema Visualization',
      'Data Export Utilities',
    ],
    role: 'Software Developer',
    status: 'Personal Project',
    company: 'Personal Project',
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
  },
];

export { experiences, testimonials, projects };

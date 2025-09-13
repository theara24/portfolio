export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services = [
  {
    title: 'Full Stack Developer',
    icon: '/fullsttack.webp',
  },
  {
    title: 'Frontend Developer (React & Tailwind)',
    icon: '/frontend.webp',
  },
  {
    title: 'Database Developer',
    icon: '/database.webp',
  },
  {
    title: 'UI/UX & Graphic Designer',
    icon: '/uxui.webp',
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
    title: 'Frontend Web Developer',
    company_name: 'JobSeek / Freelance Work',
    icon: '/company/web.png',
    iconBg: '#E6DEDD',
    date: '2022 - 2023',
    points: [
      'Developed and maintained web applications using React.js and other related technologies.',
      'Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implemented responsive design and ensured cross-browser compatibility.',
      'Participated in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'EasyFound / Freelance',
    icon: '/company/frontend.png',
    iconBg: '#383E56',
    date: '2023 - 2024',
    points: [
      'Developed full-stack web applications using React, Node.js, and MongoDB.',
      'Created RESTful APIs and integrated third-party services.',
      'Implemented user authentication and authorization systems.',
      'Optimized applications for maximum speed and scalability.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'DocuHub / Freelance',
    icon: '/company/cs.png',
    iconBg: '#E6DEDD',
    date: '2024 - Present',
    points: [
      'Developing and maintaining web applications using modern technologies.',
      'Working with various clients to understand requirements and deliver solutions.',
      'Implementing responsive design and ensuring cross-platform compatibility.',
      'Gained practical experience with payment processing, HTTP requests, and database connectivity.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'GitHub is a web-based platform used for version control and collaboration. It allows developers to work together on projects from anywhere.',
    name: 'Theara Chim',
    image: '/socialmedia/github.svg',
    link: 'https://github.com/theara24',
  },
  {
    testimonial:
      'LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.',
    name: 'Theara Chim',
    image: '/socialmedia/linkedin.svg',
    link: 'https://linkedin.com/in/theara-chim',
  },
  {
    testimonial:
      'Telegram is a cloud-based instant messaging and voice over IP service. It allows you to send messages and exchange files.',
    name: 'Theara Chim',
    image: '/socialmedia/telegram.png',
    link: 'https://t.me/theara24',
  },
  {
    testimonial:
      'Facebook is a social networking service that allows you to connect with friends, family, and colleagues.',
    name: 'Theara Chim',
    image: '/socialmedia/facebook.png',
    link: 'https://www.facebook.com/share/16dR4bHnUa/?mibextid=wwXIfr',
  },
  {
    testimonial:
      'Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.',
    name: 'Theara Chim',
    image: '/socialmedia/dribble.svg',
    link: 'https://dribbble.com/theara24',
  },
  {
    testimonial:
      'Fiverr is a global online marketplace for freelance services, where you can showcase your skills and get hired.',
    name: 'Theara Chim',
    image: '/socialmedia/fiverr.png',
    link: 'https://www.fiverr.com/rrelaxing/buying?source=avatar_menu_profile',
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  deploy_link: string;
  platform: string;
}[] = [
  {
    name: 'EasyFound - Lost & Found Platform',
    description:
      'A comprehensive lost and found platform built with React and Node.js, featuring user authentication, image upload, and real-time notifications. Users can post lost items and search for found items with advanced filtering.',
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
    source_code_link: 'https://github.com/Nyfong/PU1G2-serviceListing2.git',
    platform: 'Vercel',
    deploy_link: 'https://ezfound-deploy.vercel.app/',
  },
  {
    name: 'JobSeek - Job Portal',
    description:
      'A modern job portal with advanced search functionality, company profiles, and application tracking. Built with Next.js and featuring responsive design, user authentication, and admin dashboard.',
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
    platform: 'Vercel',
    deploy_link: 'https://www.job-seek.works/',
  },
  {
    name: 'DocuHub - Document Management',
    description:
      'A secure document management system with file upload, categorization, and sharing capabilities. Features include user roles, document versioning, and search functionality.',
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
    platform: 'Vercel',
    deploy_link: 'https://deploy-docu-hub-frontend.vercel.app/',
  },
  {
    name: 'POS System - Point of Sale',
    description:
      'A complete point of sale system for retail businesses with inventory management, sales tracking, and reporting features. Built with modern web technologies and responsive design.',
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
    platform: 'Heroku',
    deploy_link: 'https://github.com/theara24/POS-System.git',
  },
  {
    name: 'C++ Learning Platform',
    description:
      'An interactive learning platform for C++ programming with coding challenges, tutorials, and progress tracking. Features include code editor, compiler integration, and user progress analytics.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Python',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/c.png',
    source_code_link:
      'https://github.com/theara24/Employee-Management-System.git',
    platform: 'AWS',
    deploy_link: 'http://training.antkh.com/achievements/808.aspx',
  },
  {
    name: 'SQL Server Management Tool',
    description:
      'A web-based SQL Server management tool with query execution, database visualization, and performance monitoring. Features include query history, export functionality, and user management.',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'SQL Server',
        color: 'pink-text-gradient',
      },
      {
        name: 'Entity Framework',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/sql_sever.png',
    source_code_link: 'https://github.com/theara24/POS_SQLServer.git',
    platform: 'Azure',
    deploy_link: 'https://github.com/theara24/POS_SQLServer.git',
  },
  {
    name: 'EasyFound - Ux Ui',
    description:
      'A clean UI/UX design. The website showcases my skills, projects, and experience in web development.',
    tags: [
      {
        name: 'Figma',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/easyfoundui.png',
    source_code_link: '#',
    platform: 'Figma',
    deploy_link: '#',
  },
  {
    name: 'JobSeek - Ux Ui',
    description:
      'A clean UI/UX design. The website showcases my skills, projects, and experience in web development.',
    tags: [
      {
        name: 'Figma',
        color: 'blue-text-gradient',
      },
    ],
    image: '/projectimg/jobseekui.png',
    source_code_link:
      'https://www.figma.com/design/xtMOvFfMJVKh1zoiOUKBk4/F3-Project?node-id=0-1&t=Pex5WD5eefpBhI8E-1',
    platform: 'Figma',
    deploy_link:
      'https://www.figma.com/design/xtMOvFfMJVKh1zoiOUKBk4/F3-Project?node-id=0-1&t=Pex5WD5eefpBhI8E-1',
  },
];

export { experiences, testimonials, projects };

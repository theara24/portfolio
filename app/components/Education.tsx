'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '@/app/components/HigherOrderComponents';
import { fadeIn, textVariant, staggerContainer } from '@/app/utils/motion';
import {
  GraduationCap,
  Award,
  Users,
  ExternalLink,
  Calendar,
  MapPin,
  X,
} from 'lucide-react';

// Sample data with updated details
const educationData = [
  {
    institution: 'SETEC Institute',
    degree: 'Bachelor of Management Information Systems',
    date: '2023 - Present',
    location: 'Phnom Penh, Cambodia',
    icon: '/education/university.png',
    iconBg: '#3b82f6',
    gpa: 'In Progress',
    achievements: [
      'Software Development & Programming',
      'Database Management & System Analysis',
      'Web Development & Information Systems',
      'Team-based Academic Projects',
    ],
    description:
      'Pursuing a bachelor’s degree in Management Information Systems, combining information technology, software development, database systems, and business processes.',
  },
  {
    institution: 'Sok An Doung Khpous Bouret Cholsar High School',
    degree: 'High School Diploma',
    date: '2020 - 2022',
    location: 'Takeo, Cambodia',
    icon: '/education/highschool.png',
    iconBg: '#14b8a6',
    gpa: 'Graduated',
    achievements: [],
    description:
      'Completed high school education and prepared for further studies in technology and information systems.',
  },
];

const certificatesData = [
  {
    title: 'Web Design',
    issuer: 'ISTAD',
    date: '2024',
    verifyLink: '',
    image: '/certificates/web-design.png',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Tailwind CSS',
      'Figma',
      'React',
      'Git',
    ],
    credentialId: 'ISTAD-WD-2023',
    scholarship: 'Pre-University Scholarship',
    scholarshipDetails:
      'Institute of Science and Technology Advanced Development currently provides a 100% scholarship opportunity for 200 places per year.',
    technologies: [
      {
        name: 'HTML',
        description:
          'HTML (Hypertext Markup Language) is the fundamental building block of the web, providing the structure and semantic meaning to web pages by defining the elements and their relationships, enabling the display of content across different browsers and devices.',
      },
      {
        name: 'CSS',
        description:
          'CSS is a vital web development technology that controls the visual appearance of web pages, allowing designers to create engaging user experiences by defining layout, colors, fonts, and more.',
      },
      {
        name: 'JavaScript',
        description:
          'JavaScript is a dynamic programming language that adds interactivity and functionality to websites, allowing developers to create engaging user experiences and manipulate web page content.',
      },
      {
        name: 'Bootstrap',
        description:
          'Bootstrap is a popular front-end framework that simplifies the development of responsive and visually appealing web applications, offering ready-to-use components and a responsive grid system.',
      },
      {
        name: 'Tailwind CSS',
        description:
          'Tailwind CSS is a powerful utility-first CSS framework designed to streamline the development of customizable and responsive user interfaces, providing a wide range of pre-built classes for rapid implementation.',
      },
      {
        name: 'Figma',
        description:
          'Figma is a cloud-based design tool that simplifies collaboration for creating user interfaces and prototypes. It offers powerful features, intuitive design tools, and seamless sharing capabilities, making it a top choice for design teams working on web and mobile projects.',
      },
      {
        name: 'React',
        description:
          'React is a robust and flexible JavaScript library that revolutionizes user interface development by providing reusable components, efficient rendering, and support for building dynamic and scalable applications.',
      },
      {
        name: 'Git',
        description:
          'Git is a widely used version control system that tracks code changes, supports collaboration, and enhances software development efficiency. It enables developers to work on projects simultaneously, manage revisions, and merge changes seamlessly.',
      },
    ],
  },
  {
    title: 'C/C++ Programming',
    issuer: 'ANT',
    date: '2024',
    verifyLink: '',
    image: '/certificates/cpp.png',
    skills: ['C', 'C++', 'Problem Solving', 'Algorithms'],
    credentialId: 'ANT-CPP-2022',
    scholarship: '',
    scholarshipDetails: '',
    technologies: [],
    additionalDetails: [
      'Study with practical application in creating real-world group projects.',
      'Key topics covered in the 6-month course (C++ & C++ OOP):',
      '- Understand the objectives of the C++ & C++ OOP course.',
      '- Learn the fundamentals of the C++ language (Console I/O, Variable, Operator, Control Structure, Function, Array, Pointer & Reference, etc.).',
      '- Learn to design attractive and user-friendly Console Apps.',
      '- Explore the use of ANTHinsyOOP DLL Library and other ANT libraries.',
      '- Learn to organize Assignment Plans and work on group assignments.',
      '- Understand Basic C++ OOP (Class & Object, Setter, Getter, Constructor, Destructor, etc.).',
      '- Explore C++ Template and Standard Template Library (std::min, std::max, std::swap, std::sort, std::vector, etc.).',
      '- Learn C++ File I/O.',
      '- Understand Advanced C++ OOP (Inheritance, Polymorphism, Abstract Class, Interface, etc.).',
      '- Complete a final project assignment to conclude the course.',
    ],
  },
  {
    title: 'Web Development',
    issuer: 'ISTAD',
    date: '2025',
    verifyLink: '',
    image: '/certificates/web-dev.png',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Tailwind CSS',
      'Figma',
      'React',
      'Java',
      'PostgreSQL',
      'Git',
    ],
    credentialId: 'ISTAD-WEBDEV-2023',
    scholarship: 'Foundation Scholarship',
    scholarshipDetails:
      'Institute of Science and Technology Advanced Development currently provides a 50% scholarship opportunity for 120 to 160 places per year.',
    technologies: [
      {
        name: 'HTML',
        description:
          'HTML (Hypertext Markup Language) is the fundamental building block of the web, providing the structure and semantic meaning to web pages by defining the elements and their relationships, enabling the display of content across different browsers and devices.',
      },
      {
        name: 'CSS',
        description:
          'CSS is a vital web development technology that controls the visual appearance of web pages, allowing designers to create engaging user experiences by defining layout, colors, fonts, and more.',
      },
      {
        name: 'JavaScript',
        description:
          'JavaScript is a dynamic programming language that adds interactivity and functionality to websites, allowing developers to create engaging user experiences and manipulate web page content.',
      },
      {
        name: 'Bootstrap',
        description:
          'Bootstrap is a popular front-end framework that simplifies the development of responsive and visually appealing web applications, offering ready-to-use components and a responsive grid system.',
      },
      {
        name: 'Tailwind CSS',
        description:
          'Tailwind CSS is a powerful utility-first CSS framework designed to streamline the development of customizable and responsive user interfaces, providing a wide range of pre-built classes for rapid implementation.',
      },
      {
        name: 'Figma',
        description:
          'Figma is a cloud-based design tool that simplifies collaboration for creating user interfaces and prototypes. It offers powerful features, intuitive design tools, and seamless sharing capabilities, making it a top choice for design teams working on web and mobile projects.',
      },
      {
        name: 'React',
        description:
          'React is a robust and flexible JavaScript library that revolutionizes user interface development by providing reusable components, efficient rendering, and support for building dynamic and scalable applications.',
      },
      {
        name: 'Java',
        description:
          'Java is a versatile, object-oriented programming language known for its "write once, run anywhere" (WORA) capability, enabling robust, scalable, and platform-independent applications. First released by Sun Microsystems in 1995 and now maintained by Oracle, Java is widely used in software development, web and mobile apps, and enterprise systems.',
      },
      {
        name: 'PostgreSQL',
        description:
          'PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
      },
      {
        name: 'Git',
        description:
          'Git is a widely used version control system that tracks code changes, supports collaboration, and enhances software development efficiency. It enables developers to work on projects simultaneously, manage revisions, and merge changes seamlessly.',
      },
    ],
  },
  {
    title: 'General Korean Program',
    issuer: 'CKCC',
    date: '2025',
    verifyLink: '',
    image: '/certificates/korean.png',
    skills: ['Korean Language', 'Speaking', 'Listening', 'Writing'],
    credentialId: 'CKCC-KOR-2021',
    scholarship: '',
    scholarshipDetails: '',
    technologies: [],
    additionalDetails: [
      'Learning with professional lecturers who specialize in Korean literature.',
      'Receiving an official certificate after graduation.',
      'Receiving a free CKCC library membership card valid for one year.',
      'Opportunities to experience Korean culture (K-Wave Club), Korean Clinic Club (K-Clinic Club), and special classes (Special Lecture) for free.',
      'Students receive a free set of books and study materials.',
    ],
  },
  {
    title: 'English Language Program',
    issuer: 'PCU',
    date: '2025',
    verifyLink: '',
    image: '/certificates/english.png',
    skills: ['English Communication', 'Writing', 'Speaking', 'Reading'],
    credentialId: 'PCU-ENG-2020',
    scholarship: 'GESL (General English as a Second Language)',
    scholarshipDetails:
      'The GESL program is a part-time, general English program tailored for adults. Classes are offered on weekdays during the afternoons or evenings, and there is also an intensive version of the GESL program that runs on weekends. The program consists of 12 levels from beginner to advanced, with each level lasting 3 months.',
    technologies: [],
    additionalDetails: [
      'Taught by two alternating teachers focusing on speaking, listening, reading, and writing.',
      'Upon successful completion of level 12, students are eligible to enroll in a university Bachelor’s (BA) program without further English preparation.',
    ],
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'ISTAD',
    date: '2025',
    verifyLink: '',
    image: '/certificates/fullstack.png',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Tailwind CSS',
      'Figma',
      'React',
      'Next.js',
      'PostgreSQL',
      'Spring',
      'Docker',
      'NGINX',
      'Git',
      'Project Management',
    ],
    credentialId: 'ISTAD-FSWD-2024',
    scholarship: 'Full Stack Scholarship',
    scholarshipDetails:
      'Institute of Science and Technology Advanced Development currently provides a 50% scholarship opportunity for 120 to 160 places per year.',
    technologies: [
      {
        name: 'HTML',
        description:
          'HTML (Hypertext Markup Language) is the fundamental building block of the web, providing the structure and semantic meaning to web pages by defining the elements and their relationships, enabling the display of content across different browsers and devices.',
      },
      {
        name: 'CSS',
        description:
          'CSS is a vital web development technology that controls the visual appearance of web pages, allowing designers to create engaging user experiences by defining layout, colors, fonts, and more.',
      },
      {
        name: 'JavaScript',
        description:
          'JavaScript is a dynamic programming language that adds interactivity and functionality to websites, allowing developers to create engaging user experiences and manipulate web page content.',
      },
      {
        name: 'Bootstrap',
        description:
          'Bootstrap is a popular front-end framework that simplifies the development of responsive and visually appealing web applications, offering ready-to-use components and a responsive grid system.',
      },
      {
        name: 'Tailwind CSS',
        description:
          'Tailwind CSS is a powerful utility-first CSS framework designed to streamline the development of customizable and responsive user interfaces, providing a wide range of pre-built classes for rapid implementation.',
      },
      {
        name: 'Figma',
        description:
          'Figma is a cloud-based design tool that simplifies collaboration for creating user interfaces and prototypes. It offers powerful features, intuitive design tools, and seamless sharing capabilities, making it a top choice for design teams working on web and mobile projects.',
      },
      {
        name: 'React',
        description:
          'React is a robust and flexible JavaScript library that revolutionizes user interface development by providing reusable components, efficient rendering, and support for building dynamic and scalable applications.',
      },
      {
        name: 'Next.js',
        description:
          'Next.js is a powerful framework built on React that simplifies server-rendered React application development with features like server-side rendering, client-side routing, and built-in API support.',
      },
      {
        name: 'PostgreSQL',
        description:
          'PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
      },
      {
        name: 'Spring',
        description:
          'Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity has made it the world’s most popular Java framework.',
      },
      {
        name: 'Docker',
        description:
          'Docker is a powerful open-source platform that simplifies application deployment by packaging software and its dependencies into self-contained containers.',
      },
      {
        name: 'NGINX',
        description:
          'NGINX is a high-performance, open-source web server and reverse proxy server known for its efficiency and scalability.',
      },
      {
        name: 'Git',
        description:
          'Git is a widely used version control system that tracks code changes, supports collaboration, and enhances software development efficiency.',
      },
      {
        name: 'Project Management',
        description:
          'Project management involves planning, organizing, and overseeing all aspects of a project to ensure successful completion.',
      },
    ],
  },
];

const referencesData = [
  {
    name: 'Reksmey Mom',
    title: 'Academic Manager',
    company: 'ISTAD',
    quote:
      'A hardworking and passionate student who always strives for excellence in both academic and project work.',
    image: '/references/reksmey-mom.png',
    telegram: 'https://t.me/reksmey_mom',
    email: 'it.reksmey@gmail.com',
    phone: '085522690',
  },
  {
    name: 'Pinchhai Choeurn',
    title: 'Lecturer',
    company: 'SETEC Institute',
    quote:
      'Shows strong dedication to learning and consistently demonstrates great teamwork and problem-solving skills.',
    image: '/references/pinchhai-choeurn.png',
    telegram: 'https://t.me/Pinchai',
    email: 'choeurnpinchai@gmail.com',
    phone: '099774967',
  },
  {
    name: 'Htoo Aung',
    title: 'Senior Backend Developer',
    company: 'Everlast Information & Apps Dev Co., Ltd.',
    quote:
      'Experienced in backend development and building scalable, real-time applications using modern web technologies.',
    image: '/references/htoo-aung.png',
    telegram: 'https://t.me/reksmey_mom',
    email: 'cool.htooaung@gmail.com',
    phone: '0713761920',
  },
];

type EducationCardProps = {
  education: (typeof educationData)[0];
  index: number;
};

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
    >
      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="w-full">
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {education.degree}
                </h3>
                <p className="text-blue-400 font-semibold text-lg">
                  {education.institution}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{education.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{education.location}</span>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-semibold">
              {education.gpa}
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            {education.description}
          </p>
          <div>
            {education.achievements.length > 0 && (
              <>
                <h4
                  className="text-white font-semibold mb-3 flex items-center gap-2"
                >
                  <Award className="w-5 h-5 text-yellow-400" />
                  Key Focus
                </h4>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

type CertificateCardProps = {
  certificate: (typeof certificatesData)[0];
  index: number;
};

const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Tilt options={{ max: 20, scale: 1.05, speed: 400 }} className="h-full">
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group h-full flex flex-col">
            <div className="relative mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-0.5"
              >
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Award className="w-10 h-10 text-purple-400" />
                </div>
              </motion.div>
            </div>
            <div className="text-center mb-4 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {certificate.title}
              </h3>
              <p className="text-purple-400 font-semibold mb-2">
                {certificate.issuer}
              </p>
              <p className="text-slate-400 text-sm mb-4">{certificate.date}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl transition-all duration-300 group/link"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span className="font-medium">Verify Certificate</span>
            </button>
          </div>
        </Tilt>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-6">
              {/* Certificate Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-80 relative rounded-lg overflow-hidden"
              >
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                  onError={() => {
                    console.error(`Failed to load image: ${certificate.image}`);
                  }}
                  onLoad={() => {
                    console.log(
                      `Successfully loaded image: ${certificate.image}`
                    );
                  }}
                />
              </motion.div>

              {/* Certificate Details */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {certificate.title}
                </h3>
                <p className="text-purple-400 font-semibold mb-2">
                  Issued by {certificate.issuer}
                </p>
                <p className="text-slate-400 mb-2">Date: {certificate.date}</p>
                <p className="text-slate-400 mb-4">
                  Credential ID: {certificate.credentialId}
                </p>

                {/* Scholarship Details */}
                {certificate.scholarship && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">
                      Scholarship: {certificate.scholarship}
                    </h4>
                    <p className="text-slate-300">
                      {certificate.scholarshipDetails}
                    </p>
                  </div>
                )}

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {certificate.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                {certificate.technologies &&
                  certificate.technologies.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">
                        Technologies Used
                      </h4>
                      <div className="space-y-4">
                        {certificate.technologies.map((tech, idx) => (
                          <div key={idx} className="text-left">
                            <h5 className="text-purple-400 font-semibold">
                              {tech.name}
                            </h5>
                            <p className="text-slate-300 text-sm">
                              {tech.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Additional Details */}
                {certificate.additionalDetails &&
                  certificate.additionalDetails.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">
                        Additional Details
                      </h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        {certificate.additionalDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* External Link */}
                {certificate.verifyLink && (
                  <Link
                    href={certificate.verifyLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify Online</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

type ReferenceCardProps = {
  reference: (typeof referencesData)[0];
  index: number;
};

const ReferenceCard: React.FC<ReferenceCardProps> = ({ reference, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="h-full">
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 group h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 overflow-hidden">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  {reference.image ? (
                    <Image
                      src={reference.image}
                      alt={reference.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                      onError={() => {
                        console.error(
                          `Failed to load image: ${reference.image}`
                        );
                      }}
                      onLoad={() => {
                        console.log(
                          `Successfully loaded image: ${reference.image}`
                        );
                      }}
                    />
                  ) : (
                    <Users className="w-8 h-8 text-emerald-400" />
                  )}
                </div>
              </div>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {reference.name}
              </h3>
              <p className="text-emerald-400 font-semibold text-sm">
                {reference.title}
              </p>
              <p className="text-slate-400 text-sm">{reference.company}</p>
            </div>
          </div>
          <div className="flex-grow mb-6">
            <div className="relative">
              <div className="text-6xl text-slate-600 absolute -top-4 -left-2"></div>
              <p className="text-slate-300 italic leading-relaxed pl-8 pr-4">
                {reference.quote}
              </p>
              <div className="text-6xl text-slate-600 absolute -bottom-8 right-0 rotate-180"></div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Link
                href={reference.telegram}
                target="_blank"
                className="flex-1 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center"
              >
                Telegram
              </Link>
            </div>
            <div className="text-slate-300 text-sm">
              Email: <span className="text-emerald-400">{reference.email}</span>
            </div>
            <div className="text-slate-300 text-sm">
              Phone: <span className="text-emerald-400">{reference.phone}</span>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 0.8, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            className="text-lg text-blue-400 uppercase tracking-widest font-semibold mb-4"
          >
            Academic Journey & Credentials
          </motion.p>
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6"
          >
            Education & Growth
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>
        <section className="mb-24">
          <motion.div
            variants={staggerContainer(0.3, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">
                Academic Background
              </h2>
            </div>
            <div className="space-y-8">
              {educationData.map((education, index) => (
                <EducationCard
                  key={`education-${index}`}
                  education={education}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>
        <section className="mb-24">
          <motion.div
            variants={staggerContainer(0.2, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Award className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl font-bold text-white">
                Professional Certificates
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certificatesData.map((certificate, index) => (
                <CertificateCard
                  key={`certificate-${index}`}
                  certificate={certificate}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>
        <section>
          <motion.div
            variants={staggerContainer(0.2, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Users className="w-8 h-8 text-emerald-400" />
              <h2 className="text-4xl font-bold text-white">
                Professional References
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {referencesData.map((reference, index) => (
                <ReferenceCard
                  key={`reference-${index}`}
                  reference={reference}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </main>
  );
};

export default SectionWrapper(Education, 'education');

import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiApachemaven,
  SiSpringboot,
  SiTailwindcss,
} from 'react-icons/si';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Journey',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsDataRaw = [
  {
    image: '/images/initspring.png',
    title: 'InitSpring - AI-Powered Spring Boot Initializr',
    description:
      'InitSpring is an intuitive, AI-driven Spring Boot project generator that streamlines the backend setup process. Developers can instantly scaffold production-ready code with the right annotations—Entity, Service, Repository, One-to-Many, Many-to-One, and more—without wasting hours on manual configuration. The platform leverages AI to understand natural language descriptions of your domain, generating all necessary classes, relationships, and boilerplate code automatically.',
    technologies: [
      'Java',
      'Spring Boot',
      'Groq AI',
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Maven',
      'Lombok',
      'H2 Database',
      'MySQL',
      'PostgreSQL',
    ],
    links: {
      preview: 'https://initspring.vercel.app/',
      github: '',
      githubApi: '',
    },
  },
  {
    image: '/images/email-agent.png',
    title: 'AI Email Agent - Automate Your Job Applications',
    description:
      'AI Email Agent is an automation tool designed to simplify and speed up the job application process. By uploading an Excel file containing recruiter email addresses, configuring SMTP credentials, and attaching your resume, the agent handles all the rest. It generates professional, tailored emails and sends them to every recipient in bulk—making large-scale outreach quick and hassle-free. Features include custom email templates, one-click bulk sending, and an analytics dashboard to track applications, emails sent, responses, and interviews.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Nodemailer',
      'Excel Parser',
      'SMTP',
      'Tailwind CSS',
      'MongoDB',
      'Express.js',
    ],
    links: {
      preview: 'https://koushal.tech/email-agent',
      github: '',
      githubApi: '',
    },
  },
  {
    image: '/images/learnnow.png',
    title: 'LEARNnow - Your Personal Knowledge Revolution',
    description:
      'LEARNnow is a comprehensive platform that transforms chaotic YouTube browsing into structured, personalized learning journeys. Combining AI mentorship, gamification, and career roadmaps, LEARNnow helps users learn smarter, stay disciplined, and showcase their progress. Features include AI-powered course generation, interactive learning from YouTube videos, progress tracking with gamification, personalized career roadmaps, and actionable analytics—all designed to bring structure and motivation to your educational journey.',
    technologies: [
      'Java',
      'Spring Boot',
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'RESTful API',
      'YouTube API',
      'MySQL',
      'JWT Authentication',
      'Still in Developing Phase',
    ],
    links: {
      preview: 'https://github.com/KoushalShrma/LERNnow',
      github: 'https://github.com/KoushalShrma/LERNnow',
      githubApi: '',
    },
  },
  {
    image: '/images/findaspot.png',
    title: 'FindASpot - Smart Parking Solution',
    description:
      'FindASpot is a comprehensive smart parking management platform designed to simplify the process of finding, reserving, and managing parking spaces for commercial and private lots. Features include real-time parking slot availability with dynamic booking map, user dashboards for customers, parking managers, and admins, advanced booking options with instant reservations, multiple payment methods (credit/debit card, PayPal, ParkEase Wallet), specialized slot types (Standard, Premium, EV Charging, Disabled Access, Large Vehicle), comprehensive analytics reports and charts, and the ability to extend bookings via app up to 30 minutes before expiry.',
    technologies: [
      'Java',
      'Spring Boot',
      'React.js',
      'MySQL',
      'RESTful API',
      'Stripe API',
      'PayPal Integration',
      'Tailwind CSS',
      'JWT Authentication',
      'Real-time Updates',
      'Still in Deploying Phase',
    ],
    links: {
      preview: 'https://github.com/KoushalShrma/FindASpot',
      github: '',
      githubApi: '',
    },
  },
  {
    image: '/images/shangrila-petition.png',
    title: 'Shangrila Petition Platform',
    description:
      'A fully Functional MERN Stack Web Application. Having responsive behaviour, smooth touch UI with API Integration. With Admin and Petitioner Panel, along with new features such as Login in with QR Code, Signing In, Setting Global Threshold.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    links: {
      preview: '',
      github: '',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/15.png',
    title: 'The Kolorado Paints',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Artistic Content.',
    technologies: ['Next.js', 'CSS3', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://thekoloradopaints.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/13.png',
    title: 'TechnoKraft',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Educational Content Provider',
    technologies: ['Next.js', 'CSS3', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://tts.net.in/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/16.png',
    title: 'BEST GST Course',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project also contains Payment Gateway Integration using Easebuzz. This is a GST Course Selling website.',
    technologies: [
      'Payment Gateway',
      'Next.js',
      'Tailwind CSS',
      'React.js',
      'MUI',
      'SEO',
    ],
    links: {
      preview: 'https://www.bestgstcourse.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/12.png',
    title: 'Affinix Digital',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Best Digital Marketing Agency',
    technologies: ['Next.js', 'Tailwind CSS', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://affinixdigital.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/14.png',
    title: 'Octane Apps',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration.',
    technologies: ['Next.js', 'SCSS', 'CSS', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://octaneapps.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/main.png',
    title: "Dr. Manisha's Yoga Institute",
    description:
      'Created a MEVN Stack Web Application. Gave more than 180+ hours on this project. The project also includes admin panel along with CRUD Functionalities. Blogging System using Firebase.',
    technologies: [
      'Vue.js',
      'Tailwind CSS',
      'Vuex',
      'MongoDB',
      'Node-Express',
      'Firebase',
      'SEO',
    ],
    links: {
      preview: 'https://www.drmanishasyogainstitute.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/1.png',
    title: 'Anandlok Ayurveda',
    description:
      'Using ReactJs, Next.js, and Material-UI, I worked as an Intern for Anandlok Ayurveda & Panchakrma Hospital and created a website for Ayurveda & Panchakarma practitioners to share their knowledge and experience with others.',
    technologies: ['Next.js', 'React.Js', 'CSS', 'Material-UI'],
    links: {
      preview: 'https://www.anandlokayurveda.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/news-o-pedia.png',
    title: 'News-o-Pedia',
    description:
      'Using Vue.js I have created this news application having the main feature of Image Mapping, Used newsapi.org api to fetch the news from different parts of the world. Note: The API used works developers mode (i.e, locally. download it).',
    technologies: ['Vue.js', 'CSS', 'NewsAPI.org'],
    links: {
      preview: 'https://news-o-pedia.netlify.app/',
      github: 'https://github.com/Yashkapure06/News-O-Pedia',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/text-to-sppech.webp',
    title: 'Select Text to Speech Chrome extention',
    description:
      "A simple chrome extension where you can select text, then right click and then select the option 'Read aloud' and you can hear the final audio.",
    technologies: ['JavaScript'],
    links: {
      preview: 'https://github.com/Yashkapure06/TextToSpeech-ChromeExtension',
      github: 'https://github.com/Yashkapure06/TextToSpeech-ChromeExtension',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/restro.png',
    title: 'Restro - A Restaurent Website',
    description:
      'A simple and beautiful Restaurent Website made with Pure HTML, CSS and JS. With some beautiful Animation and data fetching using API.',
    technologies: ['HTML', 'CSS', 'Javascript', 'API'],
    links: {
      preview: 'https://fynd-academy-mevn.vercel.app/',
      github:
        'https://github.com/Yashkapure06/fyndAcademy-MEVN/tree/master/Project3-HTML%2BCSS%2BJS',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/9.png',
    title: 'OpenSource Contribution in Chakra-UI',
    description:
      'I created a portfolio website for my OpenSource contribution in Chakra-UI. This website is a collection of my contributions to the Chakra-UI community.',
    technologies: ['Chakra-UI', 'React.Js', 'CSS'],
    links: {
      preview: 'https://chakra-ui.com/community/showcase',
      github: 'https://github.com/Yashkapure06/awesome-chakra-ui',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/10.png',
    title: 'Netflix Clone using ReactJs',
    description:
      'I created a Netflix clone using ReactJs and Sass. This is a clone of Netflix website. And played a lot with Api.',
    technologies: ['React JS', 'SCSS', 'CSS', 'API'],
    links: {
      preview: 'https://netflix-clone-06.netlify.app/',
      github: 'https://github.com/Yashkapure06/netflix-clone',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/11.png',
    title: 'YouTube Clone using ReactJs',
    description:
      'I created a YouTube clone using ReactJs and Material UI. Used Rapid API to fetch data and learnt how to fetch data using API. The API used here was YouTube v3.',
    technologies: ['ReactJs', 'CSS', 'Material-UI', 'API'],
    links: {
      preview: 'https://youtube-clone-06.netlify.app/',
      github: 'https://github.com/Yashkapure06/youtube_clone',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/7.png',
    title: 'Blogging Website',
    description:
      'This Blogging Website is made with NodeJs, Express and MongoDB. It is a simple blogging website where you can read, write, delete and edit your blog post.',
    technologies: ['Nodejs', 'Express', 'CSS', 'MongoDB'],
    links: {
      preview: 'https://github.com/Yashkapure06/Blogging-Website',
      github: 'https://github.com/Yashkapure06/Blogging-Website',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/8.png',
    title: 'Personal Portfolio',
    description:
      'This is my personal portfolio website. I have made this with the help of NextJS + Its documents .You can see my projects, skills, and contact me over here as well.',
    technologies: ['NextJs', 'MaterialUI'],
    links: {
      preview: 'https://yash-kapure.vercel.app/',
      github: 'https://github.com/Yashkapure06/PersonalPortfolio',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/spacetalks.png',
    title: 'Space Talks ✨',
    description:
      'This is a MERN Website. I have created this website using ReactJs, Material-UI, Nodejs, CSS, Express and MongoDB. This website is a platform for people to share their love and knowledge about space, universe, stars, galaxies and other planets with people from all over.',
    technologies: ['ReactJs', 'Material-UI', 'Three.Js', 'MongoDB'],
    links: {
      preview: 'https://space-talks.netlify.app/',
      github: 'https://github.com/Yashkapure06/Space-Talks-MERN',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/4.png',
    title: 'Personal Portfolio',
    description:
      'This is My 1st Portfolio Website. I Made this with ReactJS while Learning ReactJS. A lots of CSS is Used for Animation. I have also added the feature of Dark & Light Mode',
    technologies: ['React', 'CSS3', 'JavaScript'],
    links: {
      preview: 'https://yashkapure-portfolio.web.app/',
      github: 'https://github.com/Yashkapure06/PersonalPortfolio2',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/6.png',
    title: 'Movie WebApp',
    description:
      'A Simple Movie App Using Pure ReactJs - made for just revision purpose',
    technologies: ['React', 'CSS3', 'JavaScript', 'API'],
    links: {
      preview: 'https://react-movie-app-yash.netlify.app/',
      github: 'https://github.com/Yashkapure06/Movie-App',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/3.png',
    title: 'Complete React Website',
    description:
      'I made this whole website from scratch with latest versions of React. This Complete Demo Website is Made using ReactJs, HTML, CSS. This website is a complete demo website which includes all the components of ReactJs.',
    technologies: ['React', 'CSS3'],
    links: {
      preview: 'https://reactwebsite-3b247.web.app/',
      github: 'https://github.com/Yashkapure06/React-Website',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/5.png',
    title: 'Wedding Invitation Website',
    description:
      'This Website is purely made with HTML, CSS and mainly JS. You Will find some Beautiful animations in this website. Some Special Features are also added in this website, please visit and check.',
    technologies: ['HTML', 'CSS', 'JS'],
    links: {
      preview: 'https://harshal-nandani.web.app/',
      github: 'https://github.com/Yashkapure06/Wedding-Website',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
] as const;

// Normalize project technologies: trim and dedupe while preserving order
const normalizeTechs = (arr: readonly string[]) =>
  Array.from(
    arr
      .map((t) => t.trim())
      .reduce((acc: string[], cur) => {
        if (!acc.includes(cur)) acc.push(cur);
        return acc;
      }, [])
  );

export const projectsData = projectsDataRaw.map((p) => ({
  ...p,
  technologies: normalizeTechs(p.technologies),
}));

export const experiencesDataRaw = [
  {
    title: '2022 — Where It All Began',
    company: 'First Steps Into Code',
    description:
      'It started with curiosity and a single "Hello World" in Java. That moment sparked something deeper—a hunger to understand how software works. I dove into Object-Oriented Programming, conquered Data Structures & Algorithms, and built console applications that turned abstract concepts into real solutions. Every bug I fixed, every algorithm I optimized taught me that persistence beats talent every time.',
    period: '2022',
    technologies: [
      'Java',
      'OOP',
      'Data Structures',
      'Algorithms',
      'Problem Solving',
    ],
  },
  {
    title: '2023 — Bringing Ideas to Life',
    company: 'Web Development Journey',
    description:
      "With Java as my foundation, I discovered the visual world of web development. HTML, CSS, and JavaScript became my canvas. I learned that great software isn't just functional—it's intuitive and beautiful. React.js and Tailwind CSS empowered me to build interfaces that users actually enjoy. This was when I realized: code is a bridge between imagination and reality.",
    period: '2023',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: '2024 — Mastering the Backend',
    company: 'Full Stack Evolution',
    description:
      "Frontend was exciting, but I craved deeper challenges. I immersed myself in Spring Boot, learning to architect robust backend systems. Building RESTful APIs, implementing JWT authentication, designing database schemas with Hibernate and MySQL—this is where I found my stride. I wasn't just writing code anymore; I was engineering scalable, secure solutions that could handle real-world demands.",
    period: '2024',
    technologies: [
      'Spring Boot',
      'Java',
      'Hibernate',
      'MySQL',
      'JWT',
      'REST APIs',
      'Backend Architecture',
    ],
  },
  {
    title: 'Building Real Solutions',
    company: 'Project-Based Learning',
    description:
      "Theory is powerful, but execution is everything. I built Learn Now—a learning platform with structured educational paths, secure authentication, and robust REST APIs. Then came Find-A-Spot—a smart parking system with real-time booking and tracking. These weren't just projects; they were proof that I could take an idea from concept to deployment, solving real problems with clean, maintainable code.",
    period: '2024 - 2025',
    technologies: [
      'Spring Boot',
      'MySQL',
      'REST APIs',
      'JWT Authentication',
      'Database Design',
      'System Architecture',
    ],
  },
  {
    title: 'July - August 2025 — Professional Training',
    company: 'Full Stack Java Developer Trainee',
    description:
      "I pushed myself through an intensive training program that demanded excellence. Built enterprise-grade applications with Spring Boot, Hibernate, and React.js. Mastered advanced patterns like DTOs and layered architecture. When complex bugs appeared, I was the one teammates turned to. My dedication to clean code and problem-solving didn't go unnoticed—I earned recognition not just for what I built, but for how I built it.",
    period: 'July - August 2025',
    technologies: [
      'Spring Boot',
      'Hibernate',
      'React.js',
      'JWT',
      'DTO Pattern',
      'RESTful APIs',
      'Team Collaboration',
    ],
  },
  {
    title: '2025 — Proving My Worth',
    company: 'Certifications & Growth',
    description:
      "Talk is cheap. I backed up my skills with certifications from IIT Kharagpur (NPTEL) and J.P. Morgan Chase (Forage), validating my expertise in Java and DBMS. But I didn't stop there—I sharpened my problem-solving with daily DSA practice, contributed to open-source projects on GitHub, and kept pushing my limits. Success isn't given; it's earned through relentless effort.",
    period: '2025',
    technologies: [
      'Java',
      'DBMS',
      'Data Structures',
      'Algorithms',
      'Git',
      'GitHub',
      'Open Source',
    ],
  },
  {
    title: 'Today — Hungry for More',
    company: 'The Journey Continues',
    description:
      "I'm not here to settle. As an emerging Full Stack Java Developer, I'm constantly learning new frameworks, writing cleaner code, and staying ahead of industry trends. Every challenge is an opportunity to improve. Every project is a chance to prove myself. My goal is crystal clear: build fast, scalable, and impactful applications that matter. The grind never stops, and neither does my ambition.",
    period: 'Present',
    technologies: [
      'Java',
      'Spring Boot',
      'React.js',
      'MySQL',
      'Modern Frameworks',
      'Clean Code',
      'Continuous Learning',
    ],
  },
] as const;

// Export cleaned experiencesData with deduped/trimmed technologies
export const experiencesData = experiencesDataRaw.map((e) => ({
  ...e,
  technologies: normalizeTechs(e.technologies),
}));

export const skillsData = [
  { icon: <FaHtml5 className="size-14" color="#e34c26" /> },
  { icon: <FaCss3Alt className="size-14" color="#264de4" /> },
  { icon: <SiTailwindcss className="size-14" color="#06b6d4" /> },
  { icon: <SiSpringboot className="size-14" color="#6db33f" /> },
  { icon: <FaJava className="size-14" color="#007396" /> },
  { icon: <FaJs className="size-14" color="#f7e018" /> },
  { icon: <FaReact className="size-14" color="#61dafb" /> },
  { icon: <SiApachemaven className="size-14" color="#c71a36" /> },
] as const;

export const testimonialsData = [] as const;

import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiApachemaven, SiSpringboot, SiTailwindcss } from 'react-icons/si';

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
      'Deployed',
    ],
    links: {
      preview: 'https://lernnow.vercel.app/',
      github: 'https://github.com/KoushalShrma/LERNnow',
      githubApi: '',
    },
  },
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
      'Deployed',
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
      'Deployed',
    ],
    links: {
      preview: 'https://koushal.tech/email-agent',
      github: '',
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

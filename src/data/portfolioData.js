export const portfolioData = {
  personal: {
    name: "Yuvaraj Misal",
    title: "React Developer",
    subtitle: "Full Stack Developer & UI/UX Enthusiast",
    email: "misalyuvi@gmail.com",
    location: "Pune, India",
    phone: "8308877559",
    bio: "Passionate about crafting high-performing, accessible, and user-friendly web applications. I specialize in React.js, Node.js, and modern JavaScript frameworks to build scalable, maintainable, and responsive user interfaces. With a strong focus on clean code, performance optimization, and accessibility, I strive to deliver seamless digital experiences that meet both user and business needs.",
    about: "I'm a passionate developer with 3+ years of experience building responsive and scalable web applications. My journey began when I built a supermarket POS system using React—this project sparked my love for solving real-world problems through code. Since then, I've collaborated with teams across startups and enterprises, focusing on React, Next.js, and strong core CS principles. Outside of code, I dive into UI design patterns, explore new hosting platforms like Vercel, and constantly challenge myself to learn and adapt."
  },

  social: {
    github: "https://github.com/yuvarajmisal",
    linkedin: "https://linkedin.com/in/yuvarajmisal",
    twitter: "https://twitter.com/yuvi_9991",
    instagram: "https://instagram.com/yuvarajmisal1896",
    youtube: "",
    portfolio: "https://yuvaraj.dev",
    naukri: "https://www.naukri.com/"
  },

  skills: {
    frontend: [
      "React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript (ES6+)",
      "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS", "Bootstrap", "Material-UI",
      "Redux", "Zustand", "React Query", "GraphQL", "Apollo Client"
    ],
    backend: [
      "Node.js", "Express.js", "NestJS", "Python", "Django", "FastAPI",
      "Java", "Spring Boot", "C#", ".NET Core", "PHP", "Laravel"
    ],
    database: [
      "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase",
      "Prisma", "TypeORM", "Mongoose", "Sequelize"
    ],
    devops: [
      "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Vercel",
      "Netlify", "GitHub Actions", "CI/CD", "Jenkins", "Terraform"
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Postman", "Insomnia", "Figma",
      "Adobe XD", "Webpack", "Vite", "Rollup", "Jest", "Cypress"
    ],
    emerging: [
      "Web3", "Blockchain", "Solidity", "Ethereum", "AI/ML", "TensorFlow",
      "PyTorch", "Machine Learning", "Data Science", "IoT", "Edge Computing"
    ]
  },

  experience: [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior React Developer",
      duration: "Jan 2023 - Present",
      location: "Pune, India",
      description: "Leading development of enterprise-level React applications, mentoring junior developers, and implementing best practices for code quality and performance.",
      achievements: [
        "Reduced bundle size by 40% through code splitting and lazy loading",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 5 junior developers and conducted code reviews"
      ],
      technologies: ["React", "TypeScript", "Redux", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 2,
      company: "StartupHub",
      position: "Full Stack Developer",
      duration: "Mar 2021 - Dec 2022",
      location: "Bangalore, India",
      description: "Built and maintained multiple web applications using modern technologies, collaborated with cross-functional teams, and participated in agile development processes.",
      achievements: [
        "Developed 3 full-stack applications from concept to deployment",
        "Integrated third-party APIs and payment gateways",
        "Optimized database queries improving performance by 50%"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"]
    },
    {
      id: 3,
      company: "Digital Innovations",
      position: "Frontend Developer",
      duration: "Jun 2020 - Feb 2021",
      location: "Pune, India",
      description: "Created responsive user interfaces and implemented modern web design principles, worked closely with UI/UX designers, and ensured cross-browser compatibility.",
      achievements: [
        "Built 10+ responsive landing pages and components",
        "Implemented accessibility features following WCAG guidelines",
        "Reduced page load time by 30% through optimization"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Webpack", "Git"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Portfolio Builder",
      description: "An intelligent portfolio generator that uses AI to suggest content, layouts, and design elements based on user preferences and industry standards.",
      longDescription: "Developed an AI-driven portfolio builder that analyzes user input and generates personalized portfolio suggestions. Includes template customization, content optimization, and SEO recommendations.",
      tags: ["Next.js", "AI/ML", "Tailwind CSS", "OpenAI API", "Responsive Design"],
      github: "https://github.com/misalyuvaraj/Electron-ChatGPT",
      demo: "https://ai-portfolio-builder.vercel.app",
      image: "portfolioImg",
      features: [
        "AI-powered content suggestions",
        "Template customization",
        "SEO optimization",
        "Responsive design",
        "Export to PDF",
        "Analytics dashboard"
      ],
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Electron js","HTML","Css","Javascript"]
    },
    {
      id: 3,
      title: "Billing App ",
      description: "A decentralized application for tracking products through the supply chain using blockchain technology, ensuring transparency and authenticity.",
      longDescription: "Built a blockchain-based supply chain tracking system that provides end-to-end visibility of products. Uses smart contracts for automated verification and immutable record keeping.",
      tags: ["Web3", "Blockchain", "Solidity", "Ethereum", "React", "MetaMask"],
      github: "https://github.com/vaibhavbhagare/electrobill",
      demo: "https://supply-chain-tracker.vercel.app",
      image: "utilsImg",
      features: [
        "Smart contract integration",
        "Product tracking and verification",
        "Immutable record keeping",
        "Real-time updates",
        "Multi-stakeholder access",
        "Audit trail generation"
      ],
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "Hardhat", "IPFS"]
    },
    {
      id: 5,
      title: "Jay Protfolio",
      description: "A centralized hub for controlling smart home devices, monitoring sensors, and automating daily routines with voice commands and mobile app control.",
      longDescription: "Developed an IoT home automation system that integrates various smart devices and sensors. Includes voice control, mobile app, and automated routines based on user preferences.",
      tags: ["React js", "Tailwind Css", "Html", "Css", "javascript", "Typescript"],
      github: "https://github.com/misalyuvaraj/jay-Profile",
      demo: "https://jay-profile.vercel.app/",
      image: "jay-profile.png",
      features: [
        "Device integration and control",
        "Voice command processing",
        "Automated routines",
        "Real-time monitoring",
        "Mobile app control",
        "Energy usage analytics"
      ],
      technologies: ["React js", "Node.js", "Html","Css","javascript","Typescript","tailwind Css"]
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Capgemini Certification",
      issuer: "Capgemini",
      date: "December 2024",
      credentialId: "CAPG-241115744",
      image: "Capgemini-certificate.jpg",
      description: "Java is a widely used and powerful language for problem-solving in various domains, from enterprise applications to mobile development and web service",
      skills: ["Java", "Problem Solving"]
    },

    {
      id: 4,
      name: "Blind Coding Certification",
      issuer: "Foundation",
      date: "September 2023",
      credentialId: "15/09/2023",
      image: "blind-coding-certificate.jpg",
      description: "Blind individuals can use various programming languages, as the accessibility relies more on the tools and environment used rather than the language itself.",
      skills: ["Python", "Java", "JavaScript", "Ruby"]
    },
    {
      id: 5,
      name: "React Developer Certification",
      issuer: "Ui/Ux Design",
      date: "Oct 2023",
      credentialId: "REACT-Oct.2023",
      image: "Coding-certificate.jpg",
      description: "Official certification demonstrating advanced React.js development skills and best practices.",
      skills: ["React", "Html", "Css", "JavaScript", "Frontend Development"]
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Best Developer Award 2023",
      issuer: "TechCorp Solutions",
      date: "December 2023",
      description: "Recognized for exceptional code quality, innovation, and mentorship contributions.",
      category: "Professional Excellence"
    },
    {
      id: 2,
      title: "Hackathon Winner - AI Innovation",
      issuer: "TechFest 2023",
      date: "November 2023",
      description: "Won first place in AI innovation category for developing an intelligent portfolio builder.",
      category: "Innovation"
    },
    {
      id: 3,
      title: "Open Source Contributor of the Month",
      issuer: "GitHub",
      date: "October 2023",
      description: "Recognized for significant contributions to popular open-source projects.",
      category: "Community"
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Mumbai University",
      duration: "2016 - 2020",
      location: "Pune, India",
      description: "Specialized in software engineering with focus on web technologies and database management.",
      achievements: ["First Class with Distinction", "Department Topper", "Best Project Award"]
    },
    {
      id: 2,
      degree: "Master of Science in Software Engineering",
      institution: "Pune University",
      duration: "2020 - 2022",
      location: "Pune, India",
      description: "Advanced studies in software architecture, cloud computing, and emerging technologies.",
      achievements: ["Distinction", "Research Paper Publication", "Industry Collaboration Project"]
    }
  ],

  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Node.js, and cloud platforms.",
      icon: "🌐",
      features: ["Responsive Design", "Performance Optimization", "SEO Optimization", "Cross-browser Compatibility"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter for iOS and Android.",
      icon: "📱",
      features: ["Native Performance", "Cross-platform", "Offline Support", "Push Notifications"]
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, deployment, and management using AWS, Azure, and Google Cloud.",
      icon: "☁️",
      features: ["Infrastructure as Code", "Auto-scaling", "Cost Optimization", "Security Best Practices"]
    },
    {
      id: 4,
      title: "AI/ML Integration",
      description: "Integration of machine learning models and AI services into web and mobile applications.",
      icon: "🤖",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO at TechCorp Solutions",
      company: "TechCorp Solutions",
      content: "Yuvaraj is an exceptional developer who consistently delivers high-quality code. His expertise in React and modern web technologies has been invaluable to our team.",
      rating: 5,
      image: "profile.png"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager at StartupHub",
      company: "StartupHub",
      content: "Working with Yuvaraj was a game-changer for our startup. He not only built our MVP but also provided valuable insights on technology choices and scalability.",
      rating: 5,
      image: "profile.png"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Designer at Digital Innovations",
      company: "Digital Innovations",
      content: "Yuvaraj's technical skills are matched only by his collaborative spirit. He worked seamlessly with our design team to create an outstanding user experience.",
      rating: 5,
      image: "profile.png"
    }
  ],

  contact: {
    email: "misalyuvi@gmail.com",
    phone: "8308877559",
    address: "Pune, Maharashtra, India",
    availability: "Available for new opportunities",
    responseTime: "Usually responds within 24 hours",
    preferredContact: ["Email", "LinkedIn", "WhatsApp"]
  },

  stats: {
    projectsCompleted: 5,
    yearsExperience: 0.6,
    clientsServed: 3,
    codeCommits: 1000,
    certifications: 5,
    technologies: 10
  }
};

export default portfolioData;

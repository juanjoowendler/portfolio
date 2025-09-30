import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Juan José Wendler | Portfolio",
  initials: "JJ",
  url: "https://dillion.io",
  location: "Córdoba, Argentina",
  locationLink:
    "https://www.google.com/maps/place/C%C3%B3rdoba/@-31.3994532,-64.1942123,12z/data=!3m1!4b1!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
  description: "Junior Full Stack Web Developer & Designer",
  summary:
    "I’m an Information Systems Engineering student with hands-on experience in Full Stack development. I’ve built systems using React, Node.js, Spring Boot, and Python, and I thrive in collaborative environments where I can solve problems and learn new technologies quickly.",
  avatarUrl: "/me.png",
  skills: [
    // Frontend
    "React",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "JavaScript",
    "UX/UI",
    "Figma",
    "Frontend Development",

    // Backend
    "Node.js",
    "Express",
    "Spring Boot",
    "Python",
    "Java",
    "SQLite",
    "MySQL",
    "APIs RESTful",

    // DevOps & Tools
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Linux",
    "Axios",

    // Methodologies & Frameworks
    "Microservices",
    "MVC",
    "Agile",
    "Testing",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  /* CONTACT */
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/juanjoowendler",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/juan-josé-wendler-829145247",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Whatsapp: {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send?phone=3541355745",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:juanjoowendler@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  /* WORK */
  work: [
    {
      company: "Web developer",
      location: "Remote",
      badges: ["HTML5", "CSS3", "JavaScript"],
      logoUrl: "./freelance.png",
      title: "Development of Static Websites",
      start: "June 2021",
      end: "Present",
      description:
        "Developed responsive static websites for small businesses using HTML5, CSS3, and JavaScript, improving their online presence and user experience.",
    },
    {
      company: "Spring Smart Accessories",
      location: "Córdoba, Argentina",
      badges: ["Sales"],
      logoUrl: "./spring.png",
      title: "Sales Representative and Customer Service",
      start: "November 2021",
      end: "March 2023",
      description:
        "Focused on client relationships, issue resolution, and teamwork.",
    },
    {
      company: "Cornwall Institute Panama",
      location: "Córdoba, Argentina",
      badges: ["English", "Teaching"],
      logoUrl: "./cornwall.jpg",
      title: "English Teacher",
      start: "June 2019",
      end: "December 2020",
      description:
        "Designed personalized lessons and improved communication skills.",
    },
  ],

  /* EDUCATION */
  education: [
    {
      school: "National Technological University · UTN FRC",
      href: "https://www.frc.utn.edu.ar/",
      degree: "Bachelor's Degree in Information Systems Engineering",
      location: "Córdoba, Argentina",
      logoUrl: "./UTN.jpg",
      start: "2021",
      end: "2026",
    },
    {
      school: "Cornwall Institute Panama",
      href: "https://www.instagram.com/clinstitute/?hl=es-la",
      degree: "English Studies",
      location: "Online",
      logoUrl: "./cornwall.jpg",
      start: "2012",
      end: "2026",
    },
    {
      school: "FreeCodeCamp",
      href: "https://www.freecodecamp.org/",
      degree: "Responsive Web Design",
      location: "Online",
      logoUrl: "./freecodecamp.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Unity",
      degree: "Video Game Programming with Unity",
      location: "Córdoba, Argentina",
      logoUrl: "./unity.jpg",
      start: "2020",
      end: "2021",
    },
    {
      school: "World TESOL Academy",
      href: "https://www.worldtesolacademy.com/",
      degree: "TESOL/TEFL",
      location: "United Kingdom",
      logoUrl: "./tesol.png",
      start: "2019",
      end: "2020",
    },
  ],

  /* PROJECTS */
  projects: [
    {
      title: "⭐ Car Agency: Backend System for Used Car Sales",
      href: "https://github.com/juanjoowendler/car-agency",
      dates: "Aug 2024 - Nov 2024",
      active: true,
      description:
        "Developed a backend system to manage test drives, vehicle tracking, and security for a used car sales agency. Implemented real-time vehicle tracking, ensured safety by preventing entry into restricted zones, and developed reporting and notification systems. The system is built using microservices with an API Gateway and integrates external APIs for geographic data.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "SQLite",
        "APIs",
        "GitHub",
        "Agile Methodologies",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/car-agency",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./agency.mp4",
    },
    {
      title: "⭐ Interactive Voice Response (IVR) System",
      href: "https://github.com/juanjoowendler/utn-project-IVR-System",
      dates: "Mar 2023 - Nov 2023",
      active: true,
      description:
        "Created an IVR system for credit card inquiry management. Initially built with Python and PyQt5, it was later migrated to Java with Spring Boot, and the frontend was updated to React.js. The system includes features like automated responses, call auditing, and Excel reporting, with data stored in MySQL.",
      technologies: [
        "Python",
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "PyQt5",
        "GitHub",
        "Trello",
        "Linux",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/utn-project-IVR-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./ivr.mp4",
    },
    {
      title: "⭐ Node.js and React REST API for Resource Management",
      href: "https://github.com/juanjoowendler/utn-project-utnflix",
      dates: "Mar 2024 - Jun 2024",
      active: true,
      description:
        "Developed a REST API for resource management using Node.js, Express, and Sequelize, with SQLite for the database. The project includes a React frontend for easy interaction with the API, supporting filtered searches and pagination.",
      technologies: [
        "Node.js",
        "Express",
        "Sequelize",
        "SQLite",
        "React",
        "Axios",
        "Bootstrap",
        "GitHub",
        "GitLab",
        "Postman",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/utn-project-utnflix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./utnflix.mp4",
    },
    {
      title: "Static Web Pages",
      href: "https://github.com/juanjoowendler/colinas-cabins",
      dates: "Aug 2024 - Nov 2024",
      active: true,
      description:
        "Here are some of my first personal freelance projects. Mostly web static pages.",
      technologies: ["HTML5", "CSS3", "Photoshop", "Web Design", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/colinas-cabins",
          icon: <Icons.github className="size-3" />,
        }
        /*,
        {
          type: "Website",
          href: "https://lascolinas.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        */
      ],
      image: "",
      video: "./general.mp4",
    },
    {
      title: "Random Variable Simulator",
      href: "https://github.com/juanjoowendler/TP2-SIM",
      dates: "Mar 2025 - Jul 2025",
      active: true,
      description:
        "This project allows you to generate random variable values ​​according to a specific distribution, perform statistical tests (such as Chi-Square), and visualize the results using a graphical interface built with PyQt5.",
      technologies: ["Python", "PyQt", "Numpy", "Pandas", "Scipy", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/TP2-SIM",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/random.png",
      video: "",
    },
    {
      title: "Green AI",
      href: "https://github.com/juanjoowendler/TP1-GreenSoftware",
      dates: "Mar 2025 - Jul 2025",
      active: true,
      description:
        "This project is part of a practical project that seeks to quantify the carbon footprint generated by running an AI in Python code.",
      technologies: ["Python", "CodeCarbon", "Pandas", "AI Llama 3", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/TP1-GreenSoftware",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/green.gif",
      video: "",
    },
    {
      title: "GuitarLA",
      href: "https://github.com/juanjoowendler/guitarla-ts",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "GuitarLA is a web app for buying guitars online. It features a shopping cart where users can add or remove items, with real-time price updates and total calculation.",
      technologies: ["TypeScript", "React", "HTML5", "CSS3", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/guitarla-ts",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/guitarla.gif",
      video: "",
    },
    {
      title: "Tip & Food Calculator",
      href: "https://github.com/juanjoowendler/tips-and-food-calculator",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Tip & Food Calculator is a simple and responsive web app that helps users calculate tips and split restaurant bills. Users can input the bill amount, choose a tip percentage, and divide the total among multiple people.",
      technologies: ["TypeScript", "React", "HTML5", "CSS3", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/juanjoowendler/tips-and-food-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tipfood.png",
      video: "",
    },
  ],
};

const portfolioData = {
  personal: {
    name: "Abhishek Bade",
    role: "Full Stack .NET Developer",
    location: "Pune, Maharashtra",
    phone: "+91 7666536850",
    email: "abhibade21@gmail.com",
    github: "https://github.com/Abhibade21",
    linkedin: "https://linkedin.com/in/abhishekbade6850",
  },

  hero: {
    tagline: "Building clean, scalable and user-friendly web applications.",
  },

  about: {
    description:
      "Electronics & Telecommunication Engineering graduate with a strong foundation in C#, Java, C/C++ and OOP. Experienced in building database-backed web applications and currently developing skills in .NET Full Stack Development.",
  },

  skills: {
    programming: ["C#", "Java", "C", "C++", "OOP"],
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["ASP.NET Core", "C#", "Node.js", "Express.js", "REST API"],
    database: ["SQL", "SQL Server"],
    tools: ["Git", "GitHub", "VS Code"],
  },

  experience: [
    {
      company: "Aalimex Software Solution Pvt Ltd",
      role: "Full Stack .NET Web Developer Intern",
      duration: "6 Months — Aug 2026 to Present",
      location: "K.K. Market, Dhankawadi, Pune",
      description:
        "Working with C#, ASP.NET Core, SQL Server and JavaScript to develop and maintain full-stack web features, responsive frontend interfaces, backend APIs and database operations.",
    },
    {
      company: "Sunshine Powertronics Pvt Ltd",
      role: "IoT + Software Intern",
      duration: "2 Months",
      location: "Manjari-Hadapsar, Pune",
      description:
        "Worked on ESP32-based IoT systems, sensor integration, hardware-software integration, motor control, automation, testing and debugging.",
    },
  ],

  projects: [
    {
      title: "Single Phase Motor Controller",
      image: "/images/projects/single-phase-motor-controller.png",
      description:
        "IoT-based single-phase motor controller using ESP32 for remote motor operation, water-level monitoring and smart automation.",
      technologies: ["ESP32", "IoT", "Embedded C/C++", "Sensors", "Wi-Fi"],
    },
    {
      title: "SmartAgroCare",
      image: "/images/projects/smartagrocare.png",
      description:
        "Automated irrigation and soil monitoring system with a web dashboard for monitoring soil moisture and nutrient data and supporting automated irrigation.",
      technologies: ["ESP32", "Node.js", "Express.js", "JavaScript"],
    },
    {
      title: "Personal Portfolio",
      image: "/images/preview.png",
      description:
        "Responsive personal portfolio website showcasing my skills, experience, projects, education and achievements.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ],

  education: [
    {
      degree: "B.E. Electronics & Telecommunication Engineering",
      institute: "PDEA's College of Engineering, Manjari, Pune",
      duration: "2022 – 2026",
      cgpa: "7.96",
      sgpa: "9.25",
    },
    {
      degree: "HSC",
      institute: "STJV Pathardi, Ahilyanagar",
      percentage: "76.83%",
    },
    {
      degree: "SSC",
      institute: "SNMV Nandur Nimbadaitya",
      percentage: "89.60%",
    },
  ],

  achievements: [
    {
      title: "3rd Rank – Smart India Hackathon",
      image: "/images/achievements/sih-hackathon.png",
    },
    {
      title: "AVISHKAR – College Level",
      image: "/images/achievements/avishkar-college.png",
    },
    {
      title: "AVISHKAR – University Level",
      image: "/images/achievements/avishkar-university.png",
    },
    {
      title: "3rd Rank – Second Year E&TC",
      image: "/images/achievements/second-year-rank.jpeg",
    },
    {
      title: "1st Rank – Third Year E&TC",
      image: "/images/achievements/third-year-rank.png",
    },
    {
      title: "1st Rank – Final Year E&TC",
      image: "/images/achievements/final-year-rank.png",
    },
  ],
};

export default portfolioData;

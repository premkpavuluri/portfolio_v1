const sectionLabels = {
  ABOUT: 'ABOUT',
  SKILLS: 'SKILLS',
  EXPERIENCE: 'EXPERIENCE',
  EDUCATION: 'EDUCATION',
  PROJECTS: 'PROJECTS',
  CONTACT: 'CONTACT'
};

const config = {
  sections: [
    {id: 'about-id', title: sectionLabels.ABOUT},
    {id: 'skills-id', title: sectionLabels.SKILLS},
    {id: 'experience-id', title: sectionLabels.EXPERIENCE},
    {id: 'projects-id', title: sectionLabels.PROJECTS},
    {id: 'contact-id', title: sectionLabels.CONTACT}
  ],
  myName: 'Prem Kumar',
  fullName: 'PREM KUMAR PAVULURI',
  emailId: 'premkumarpavuluri@gmail.com',
  city: 'Andhra Pradesh, India',
  aboutMe: `I am a passionate Full-Stack developer with 4+ years of experience, crafting innovative and user-friendly web solutions. I love working on projects that help me grow. I always keen to learn new technologies and I’ve worked with a wide range of technologies including ReactJs, Java, SpringBoot, MongoDB and more...`,
  profilePic: 'https://avatars.githubusercontent.com/u/52355836?v=4',
  skills: [
    {
      name: "bash",
      displayName: "Bash"
    },
    {
      name: "javascript",
      displayName: "JavaScript"
    },
    {
      name: "typescript",
      displayName: "TypeScript"
    },
    {
      name: "java",
      displayName: "Java"
    },
    {
      name: "kotlin",
      displayName: "Kotlin"
    },
    {
      name: "python",
      displayName: "Python"
    },
    {
      name: "nodejs",
      displayName: "NodeJS"
    },
    {
      name: "html",
      displayName: "HTML"
    },
    {
      name: "css",
      displayName: "CSS"
    },
    {
      name: "reactjs",
      displayName: "React JS"
    },
    {
      name: "spring",
      displayName: "Spring"
    },
    {
      name: "mongodb",
      displayName: "MongoDB"
    },
    {
      name: "docker",
      displayName: "Docker"
    },
    {
      name: "kubernetes",
      displayName: "Kubernetes"
    },
    {
      name: "kafka",
      displayName: "Kafka"
    },
    {
      name: "git",
      displayName: "Git"
    },
  ],
  // Latest first
  myExperience: [
    {
      company: 'ThoughtWorks',
      role: 'Senior Consultant',
      description: "I'm working as a Senior Consultant specializing in complex solutions and infrastructure architecture across the Fintech and Manufacturing domains. My role involved leading critical project streams, driving technical strategy, coordinating team cooperation, and managing deliverables towards the collective goal.\n \nLeveraging full-stack expertise across development and infrastructure tools (Java, Kotlin, Kafka, SpringBoot, React, Kubernetes,...etc), I acted as a core technical driver, consistently delivering high-quality, scalable solutions that significantly improved client system stability and accelerated project velocity.",
      from: 'September 2024',
      to: 'Present'
    },
    {
      company: 'ThoughtWorks',
      role: 'Consultant',
      description: "I'm working as a Application developer at ThoughtWorks. I'm responsible for analysing requirements, developing, testing, deploying and maintaining the web applications.\n \nCurrently, I'm working on various technologies like ReactJs, Kotlin, SpringBoot, MongoDB, Docker, Kubernetes,...etc.",
      from: 'July 2023',
      to: 'September 2024'
    },
    {
      company: 'ThoughtWorks',
      role: 'Grad Consultant',
      description: "I've worked on FinTech project as a Grad Consultant in ThoughtWorks. I've collaborated with clients closely to understand their requirements and provide them with the best solutions.\n \nI was responsible for developing and maintaining the web application using ReactJS, Kotlin, SpringBoot, MongoDB, Docker, Kubernetes,...etc.",
      from: 'Oct 2022',
      to: 'May 2023'
    },
    {
      company: 'ThoughtWorks',
      role: 'Intern',
      description: "I've joined as a STEP intern in ThoughtWorks. STEP is an intensive entry level program in ThoughtWorks Where \"We Work While Learning\". \n \nHere I got to learn various technologies, best practices, principles and apply them on real time projects. I got a chance to learn from multiple Industry experts, They helped me to build a strong foundation for my career in the IT industry.",
      from: 'Feb 2021',
      to: 'July 2023'
    }
  ],
  myProjects: [
    {
      title: 'Cluedo - Board Game',
      description: '\tCluedo is a murder mystery game, and you are a detective attempting to solve a murder in a mansion. Mr.Boddy has been murdered, there are 6 suspects, 6 weapons and 9 rooms, and You have to find out the murderer. \n' +
        '\n \n \tI have build this game along with my batch-mates as part of the project simulation in the STEP internship',
      imgName: 'cluedo.png',
      links: {
        sourceCode: 'https://github.com/premkpavuluri/cluedo-karamchand',
        site: 'https://cluedo-karamchand.onrender.com/game'
      }
    },
    {
      title: 'Personal Portfolio',
      description: '\tA personal Portfolio Website, Where I want to showcase my skills, projects and experience. \n \n \tI have designed this website using Figma and build using ReactJS.',
      imgName: 'portfolio.png',
      links: {
        sourceCode: 'https://github.com/premkpavuluri/portfolio_v1',
        site: ''
      }
    },
    {
      title: 'Todo Manager App',
      description: '\tA simple todo application used to create your own todo items and follow up on them. \n \n \tThis is one of my pet projects post learning ReactJS. I build to explore ReactJS features like useState, useEffect, reducers, context..etc',
      imgName: 'todoApp.png',
      links: {
        sourceCode: 'https://github.com/premkpavuluri/todo_app_react',
        site: 'https://todo-app-ulgs.onrender.com/'
      }
    }
  ],
  socialMedia: [
    {
      name: 'github',
      url: 'https://github.com/premkpavuluri'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pavuluri-prem-kumar-a20381191/'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/_prem_9_1_6__?igsh=MWhpaG50eDIyYWloOQ=='
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/prem.bobby.397?mibextid=ZbWKwL'
    },
    {
      name: 'twitter',
      url: 'https://x.com/PremPavuluri'
    },{
      name: 'blog',
      url: 'https://premkpavuluri.github.io/'
    },{
      name: 'mail',
      url: 'mailto:premkumarpavuluri@gmail.com'
    }
  ],
  copyRightYear: '2025',
};

export {config, sectionLabels};

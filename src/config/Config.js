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
  emailId: 'premkumarpavuluri@gmail.com',
  city: 'Andhra Pradesh, India',
  aboutMe: `I am a full-stack web developer. I enjoy working on projects that challenge me to grow.`,
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
      name: "reactjs",
      displayName: "React JS"
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
      name: "spring",
      displayName: "Spring"
    },
    {
      name: "docker",
      displayName: "Docker"
    },
    {
      name: "mongodb",
      displayName: "MongoDB"
    }
  ],
  // Latest first
  myExperience: [
    {
      company: 'ThoughtWorks',
      role: 'Full Stack Developer',
      description: "I'm working as a web developer at ThoughtWorks where I was responsible for building and maintaining web applications. \n I'm working as a web developer at ThoughtWorks where I was responsible for building and maintaining web applications. I'm working as a web developer at ThoughtWorks where I was responsible for building and maintaining web applications.",
      from: '2023',
      to: 'Present'
    },
    {
      company: 'ThoughtWorks',
      role: 'Intern',
      description: "I worked as an intern at ThoughtWorks where I was responsible for building and maintaining web applications.",
      from: '2021',
      to: '2023'
    }
  ],
  myProjects: [
    {
      title: 'Cluedo - Board game',
      description: 'An interesting detective board game. I have developed this board game as part of project simulation in the STEP internship',
      imgName: 'cluedo.png',
      links: {
        sourceCode: 'https://github.com/premkpavuluri/cluedo-karamchand',
        site: 'https://cluedo-karamchand.onrender.com/game'
      }
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal Portfolio Where, I want to showcase my skills and work. I have build this using ReactJs',
      imgName: 'portfolio.png',
      links: {
        sourceCode: 'https://github.com/premkpavuluri/portfolio_v1',
        site: ''
      }
    },
    {
      title: 'Todo Manager App',
      description: 'An application used to make todo items and follow up daily tasks. This is one of pet project post learning ReactJs.',
      imgName: 'todoApp.png',
      links: {
        sourceCode: 'https://github.com/premkpavuluri/todo_app_react',
        site: 'https://mytodoapp-qsfm.onrender.com/'
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
      url: 'https://github.com/premkpavuluri'
    },
    {
      name: 'instagram',
      url: 'https://github.com/premkpavuluri'
    },
    {
      name: 'facebook',
      url: 'https://github.com/premkpavuluri'
    },
    {
      name: 'twitter',
      url: 'https://github.com/premkpavuluri'
    }
  ],
  copyRightYear: '2024',
};

export {config, sectionLabels};
const sectionLabels = {
  ABOUT: 'ABOUT',
  SKILLS: 'SKILLS',
  EXPERIENCE: 'EXPERIENCE',
  EDUCATION: 'EDUCATION',
  PROJECTS: 'PROJECTS',
  CONTACT: 'CONTACT'
};

const config = {
  YourName: 'Prem Kumar',
  city: 'Andhra Pradesh, India',
  aboutMe: `I am a full-stack web developer. I enjoy working on projects that challenge me to grow.`,
  profilePic: 'https://avatars.githubusercontent.com/u/52355836?v=4',
  sections: [
    {id: 'about-id', title: sectionLabels.ABOUT},
    {id: 'skills-id', title: sectionLabels.SKILLS},
    {id: 'experience-id', title: sectionLabels.EXPERIENCE},
    {id: 'projects-id', title: sectionLabels.PROJECTS},
    {id: 'contact-id', title: sectionLabels.CONTACT}
  ]
};


export default config;
import emoji from 'react-easy-emoji';

import mdalogo from './assets/img/icons/common/mda.jpg'
import tdlogo from './assets/img/icons/common/Toronto-Dominion_Bank_logo.svg'
import bblogo from './assets/img/icons/common/bb.png'

export const greetings = {
    "name": "Yash Oza",
    "title": "Here's a little bit about me:",
    "description": "I'm a Fourth year CS/BBA Double Degree student at the University of Waterloo and Wilfrid Laurier University with a passion for Entrepreneurship and an interest in Machine Learning and Full Stack Development. I'm also from Toronto, which means I listen to Drake, love snow (but ironicly count the days for winter to end), and loathe the traffic on the Gardener Express Way.",
    "resumeLink": "ynoza.github.io/public/resume.pdf"
}

export const openSource = {
  githubUserName: 'ynoza',
};

export const contact = {
  
}

export const socialLinks = {
    "email": "mailto:yashoza32@gmail.com",
    "github": "https://github.com/ynoza",
    "linkedin": "https://www.linkedin.com/in/oza"
}

export const skillsSection = {
    title: "What I'm good with",
    skills: [
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'University of Waterloo',
      subHeader: 'Bachelors of Computer Science',
      duration: 'September 2018 - April 2023',
      desc: 'GPA: 3.9, Courses in:',
      descBullets: [
        'Data Structures, Algorithms, Object-Oriented Programming, UI, AI, Databases',
        'Sequential Programs, Software Architecture, OS',
        'Graph Theory, Combinatorics',
      ]
    },
    {
      schoolName: 'Wilfrid Laurier University',
      subHeader: 'Bachelors of Business Administration - Finance',
      duration: 'September 2018 - April 2023',
      desc: 'GPA: 11/12, Courses in:',
      descBullets: [
        "Financial Management, Accounting",
        'Microeconomics, Macroeconomics, Entrepreneurship',
        'Project Management'
      ]
    }
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'MDA',
    companylogo: mdalogo,
    date: 'January 2021 – April 2021',
    desc: 'Worked on the TRITON Project, a real time tracking & management software for ships and other vessels, for NATO.',
    descBullets: [
      'Typescript, Java',
      'Angular, Nodejs, Spring Boot, Microservices',
      'Docker, Kubernetes',
      'Git, Jira, Confluence'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'QNX Software Systems - Blackberry Limited',
    companylogo: bblogo,
    date: 'January 2020 – April 2020',
    desc: 'Developed & Designed a REST API reservation system in Django and a toolchain API to access the system through the command line.',
    descBullets: [
      'Python, Javascript, C, SQL, Bash',
      'Django',
      'Docker',
      'Git, Jira, Confluence'
    ],
  },
  {
    role: 'DevOps Analyst',
    company: 'TD Securities',
    companylogo: tdlogo,
    date: 'May 2019 – August 2019',
    desc: 'Automated data scraping in the production environment, batch-job failure detection in the UAT environment, and spreadsheet population, analysis, and deployment.',
    descBullets: [
      'Bash, VBA',
      'Excel',
      'Jira, Confluence'
    ],
  },
]

export const projects = [
  {
    name: "Picster",
    desc: "An Image Respository that has a Tensoflow Image Classifier running in the server so that the uploaded Images can be auto tagged and searches on the images can be made in real time.",
    stack: "Nodejs, MySQL, TypeScript, Angular, TensorFlow, JavaScript",
    link: {
      name: "Picster",
      url: "https://ynoza.github.io/Picster/"
    },
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Picster/"
    }
  },
  {
    name: "Interactive Website",
    desc: "My old Portfolio! I tried having a little bit of fun with it. There's some mystic gold interactive-snow falling from the 'sky' onto 'The Vessel' just how I remember it. This interactive animation was done with Javascript and was inspired by the CodeVault project.",
    stack: "JavaScript, HTML5, CSS",
    link: {
      name: "Interactive Website",
      url: "https://ynoza.github.io/interactiveWebsite/"
    },
    github: {
      name: "Github",
      url: "https://github.com/ynoza/interactiveWebsite"
    }
  },
  {
    name: "covidFree",
    desc: "This project will help reduce the mental fear of catching the worrisome COVID-19 virus because employers can now monitor a given employees temperature fluctuations and determine whether or not they pose a threat to anyone's wellbeing. It was designed to be easily integrated into their day to day lives by collecting the temperature data in a seamless manner, through devices such as an AirPod, which can track your temperature effortlessly while you're listening to your favorite song.",
    stack: "Firebase, AWS, Raspberry Pi, React, JavaScript",
    link: {
      name: "covidFree",
      url: "https://ynoza.github.io/covidFree/"
    },
    github: {
      name: "Github",
      url: "https://github.com/ynoza/covidFree/"
    }
  },
  ,
  {
    name: "SFL",
    desc: "SFL in a non-profit organisation that helps local businesses with thier software needs in exchange for charitable donations.",
    stack: "Firebase, AWS, Raspberry Pi, React, JavaScript",
    link: {
      name: "covidFree",
      url: "https://ynoza.github.io/covidFree/"
    },
    github: {
      name: "Github",
      url: "https://github.com/ynoza/covidFree/"
    }
  },
  {
    name: "Biquadris",
    desc: "",
    link: {
      name: "Yash",
      url: ""
    }
  },
  {
    name: "2048",
    desc: "",
    link: {
      name: "Yash",
      url: ""
    }
  },
  {
    name: "NLP Question Answerer",
    desc: "",
    link: {
      name: "Yash",
      url: ""
    }
  },
  {
    name: "Minesweeper AI",
    desc: "",
    link: {
      name: "Yash",
      url: ""
    }
  },
  {
    name: "Traffic Computer Vision",
    desc: "",
    link: {
      name: "Yash",
      url: ""
    }
  },
  {
    name: "Leetcode",
    desc: "",
    link: {
      name: "Yash",
      url: ""
    }
  },
]
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
    desc: "An Image Respository that has a Tensoflow Image Classifier running in the server so that uploaded Images can be auto tagged and searches on the images can be made in real time.",
    stack: "Nodejs, MySQL, TypeScript, Angular, TensorFlow, JavaScript, Heroku",
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
    name: "covidFree",
    desc: "A Dashboard that allows employers to monitor a given employees temperature fluctuations and determine whether or not they pose a threat to anyone's wellbeing (as a result of covid-19). It was designed to be integrated into day to day lives by being able to collect temperature data in a seamless manner, through devices such as an AirPod, which could track your temperature effortlessly while you're listening to your favorite song.",
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
    name: "Software For Love (SFL)",
    desc: "SFL in a non-profit organization that helps local businesses with thier software needs in exchange for charitable donations. Here's SFL's website and Ubionic's website for which I was the lead developer.",
    stack: "Netlify, React, JavaScript",
    link: {
      name: "SFL",
      url: "https://www.softwareforlove.com/"
    },
    secondarylink: {
      name: "Ubionics",
      url: ""
    },
    github: {
      name: "Github",
      url: "https://github.com/Software-For-Love"
    }
  },
  {
    name: "Interactive Website",
    desc: "My old Portfolio! I tried having a little bit of fun with it. There's some mystic gold interactive-snow falling from the 'sky' onto 'The Vessel' just how I remember it.",
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
    name: "Biquadris",
    desc: "Biquadris, is a Latinization of the game Tetris. In this case, it is expanded for a two player competition. The game has been designed to accomodate for various levels of difficulty and speed.",
    stack: "C++, Xming",
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Biquadris"
    }
  },
  {
    name: "2048",
    desc: "A modified version of 2048 with themed gif tiles and easier Gameplay.",
    stack: "Java",
    github: {
      name: "Github",
      url: "https://github.com/ynoza/2048-Applet"
    }
  },
  {
    name: "NLP Question Answerer",
    desc: "A Question Answering system based on inverse document frequency similar to asking Siri a question, but limited to the documents given to determine answers.",
    stack: "Python, IDF",
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Question-Answering"
    }
  },
  {
    name: "Minesweeper AI",
    desc: "Built using Pygame, uses Propositional Logic to create knowledge-based agents to make inferences about the position of mines and determine safe moves.",
    stack: "Python, PyGame",
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Minesweeper-AI"
    }
  },
  {
    name: "Traffic Computer Vision",
    desc: "This project creates a model using neural network layers to distinguish and identify street signs. To do this, the project took use of the German Traffic Sign Recognition Benchmark, which contains over 150,000 images of 43 common street signs. In the end it was able to distingush signs with 98% accuracy.",
    stack: "Python, TensorFlow, Keras, scikit-learn",
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Traffic"
    }
  },
  {
    name: "Leetcode",
    desc: "A selection of the problems I've solved since Febuary 2021. Competitive programming is one of my hobbies, I love a good problem that takes me hours to figure out.",
    stack: "Python, C++, Java, TypeScript",
    link: {
      name: "Leetcode",
      url: "https://leetcode.com/yoshimario14/"
    },
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Leetcode"
    }
  },
]
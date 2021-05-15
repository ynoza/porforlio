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
        "Financial Management, Financial Accounting, Management Accounting",
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
    name: "",
    desc: "",
    link: {
      name: "Yash",
      url: ""
    }
  }
]
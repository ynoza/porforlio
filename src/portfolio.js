import mdalogo from './assets/img/icons/common/mda.jpg'
import tdlogo from './assets/img/icons/common/Toronto-Dominion_Bank_logo.svg'
import bblogo from './assets/img/icons/common/bb.png'

import twentyfourtyeightimg from './assets/img/OP.gif';
import leetcode from './assets/img/leetcode.JPG';
import biquad from './assets/img/biquad.jpg';
import covidFree from './assets/img/covidFree.gif';
import interactive from './assets/img/interactive.gif';
import picster from './assets/img/picster.jpg';
import sfl from './assets/img/sfl.gif';
import traf from './assets/img/traf.jpg';
import nlp from './assets/img/nlp.jpg';
import minesweep from './assets/img/minesweep.jpg';

import resume from './assets/pdf/Resume_Yash_Oza.pdf'

export const greetings = {
    "name": "Yash Oza",
    "title": "Here's a little bit about me:",
    "description": "I'm a Fourth year CS/BBA Double Degree student at the University of Waterloo and Wilfrid Laurier University with a passion for Entrepreneurship and an interest in Machine Learning and Full Stack Development. I'm also from Toronto, which means I listen to Drake, love snow (but ironically count the days for winter to end), and loathe the traffic on the Gardener Express Way.",
    "resumeLink": resume
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
    languageTitle: "Languages",
    frameworkTitle: "Frameworks & Technologies",
    languageskills: [
      {
        skillName: 'Python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'Java',
        fontAwesomeClassname: 'logos:java',
      },
      {
        skillName: "C-Plus-Plus",
        fontAwesomeClassname: 'logos:c-plusplus',
      },
      {
        skillName: 'C',
        fontAwesomeClassname: 'logos:c',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'Bash',
        fontAwesomeClassname: 'logos:bash',
      },
      {
        skillName: 'Html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
    ],
    frameworkskills: [
      {
        skillName: 'AWS',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'Firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'Docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
      {
        skillName: 'Kubernetes',
        fontAwesomeClassname: 'logos:kubernetes',
      },
      {
        skillName: 'Angular',
        fontAwesomeClassname: 'logos:angular-icon',
      },
      {
        skillName: 'Nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'Reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'Django',
        fontAwesomeClassname: 'logos:django-icon',
      },
      {
        skillName: 'Tensorflow',
        fontAwesomeClassname: 'logos:tensorflow',
      },
      {
        skillName: 'Keras',
        fontAwesomeClassname: 'simple-icons:keras',
      },
      {
        skillName: 'Selenium',
        fontAwesomeClassname: 'logos:selenium',
      },
      {
        skillName: 'Spring-Boot',
        fontAwesomeClassname: 'bx:bxl-spring-boot',
      },
      {
        skillName: 'Git',
        fontAwesomeClassname: 'logos:git-icon',
      }
    ],
}


export const SkillBars = [
    {
      Stack: 'What is Double Degree and how is it possible?', //Insert stack or technology you have experience in
      progressPercentage: 'The CS/BBA double Degree program allows students to work towards two 4 year degrees simultaneously, finishing them together in 5 years. This is facilitated by a lot of overlapping prerequisites between the degrees and overloading terms by taking 6 courses per semester (sometimes 7) as opposed to 4-5.', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Why 2 degrees?', //Insert stack or technology you have experience in
      progressPercentage: 'At heart I am a Software Engineer, but I have always appreciated the importance of the internal and external business factors that drive a company. I feel like that knowledge allows me to better understand requirements and develop optimal implementations. Also, I one day hope to get into management, and I know a business degree would be crucial for that.'
    },
    {
      Stack: 'What do you like to do in your free time?',
      progressPercentage: 'I love swimming, playing cricket, and competitive programming in my free time. The last one is something that I recently got into thanks to the lockdown.',
    },
    {
      Stack: "What's your favourite Drake song?",
      progressPercentage: "I would have to say that its Marvin's Room. But recently I've been listening to Wants and Needs a lot.",
    },
  ]

export const educationInfo = [
    {
      schoolName: 'University of Waterloo',
      subHeader: 'Bachelors of Computer Science - Software Engineering',
      duration: 'September 2018 - April 2023',
      desc: 'GPA: 3.9, Courses in:',
      outerLink: 'https://uwaterloo.ca/',
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
      outerLink: 'https://www.wlu.ca/programs/business-and-economics/undergraduate/business-administration-bba/index.html',
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
    outerLink: 'https://mda.space/',
    descBullets: [
      'Typescript, Java',
      'Angular, Nodejs, Spring Boot, Microservices',
      'Docker, Kubernetes',
      'Git, Jira, Confluence'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'QNX - Blackberry Limited',
    companylogo: bblogo,
    date: 'January 2020 – April 2020',
    desc: 'Developed & Designed a REST API reservation system in Django and a toolchain API to access the system through the command line.',
    outerLink: 'https://blackberry.qnx.com/en',
    descBullets: [
      'Python, JavaScript, C, SQL, Bash, QNX',
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
    outerLink: 'https://www.tdsecurities.com/ca/en/home-page',
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
    desc: "An Image Repository that has a TensorFlow Image Classifier running in the server so that uploaded Images can be auto tagged and searches on the images can be made in real time.",
    stack: "Nodejs, MySQL, TypeScript, Angular, TensorFlow, JavaScript, Heroku",
    logo: picster,
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
    name: "Biquadris",
    desc: "Biquadris, is a Latinization of the game Tetris. In this case, it is expanded for a two player competition. The game has been designed to accommodate for various levels of difficulty and speed.",
    stack: "C++, Xming",
    logo: biquad,
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Biquadris"
    }
  },
  {
    name: "covidFree",
    desc: "A Dashboard that allows employers to monitor a given employees temperature fluctuations and determine whether or not they pose a threat to anyone's wellbeing (as a result of covid-19). It was designed to be integrated into day to day lives by being able to collect temperature data in a seamless manner, through devices such as an AirPod, which could track your temperature effortlessly while you're listening to your favorite song.",
    stack: "Firebase, AWS, Raspberry Pi, React, JavaScript",
    logo: covidFree,
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
    name: "2048",
    desc: "A modified version of 2048 with themed gif tiles and easier Gameplay. Uses various OOP strategies like Decorator and Observer.",
    stack: "Java",
    logo: twentyfourtyeightimg,
    github: {
      name: "Github",
      url: "https://github.com/ynoza/2048-Applet"
    }
  },
  {
    name: "Traffic Computer Vision",
    desc: "This project creates a model using neural network layers to distinguish and identify street signs. To do this, the project took use of the German Traffic Sign Recognition Benchmark, which contains over 150,000 images of 43 common street signs. In the end it was able to distingush signs with 98% accuracy.",
    stack: "Python, TensorFlow, Keras, scikit-learn",
    logo: traf,
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Traffic"
    }
  },
  {
    name: "Software For Love (SFL)",
    desc: "SFL in a non-profit organization that helps local businesses with their software needs in exchange for charitable donations. Here's SFL's website and Ubionic's website for which I was the lead developer.",
    stack: "Netlify, React, JavaScript",
    logo: sfl,
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
    logo: interactive,
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
    name: "NLP Question Answerer",
    desc: "A Question Answering system based on inverse document frequency similar to asking Siri a question, but limited to the documents given to determine answers.",
    stack: "Python, IDF",
    logo: nlp,
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Question-Answering"
    }
  },
  {
    name: "Minesweeper AI",
    desc: "Built using Pygame, uses Propositional Logic to create knowledge-based agents to make inferences about the position of mines and determine safe moves.",
    stack: "Python, PyGame",
    logo: minesweep,
    github: {
      name: "Github",
      url: "https://github.com/ynoza/Minesweeper-AI"
    }
  },
  {
    name: "Leetcode",
    desc: "Competitive programming is one of my more recent hobbies that I got into February 2021 (over the lockdown). I never miss the daily challenge! The picture is of April 2021.",
    stack: "Python, C++, Java, TypeScript",
    logo: leetcode,
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
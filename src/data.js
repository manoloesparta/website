import pi from './assets/pi.jpg'
import hn from './assets/hn.png'
import lalalang from './assets/lalalang.png'
import lostinp from './assets/lostinp.png'
import shrtnr from './assets/shrtnr.png'


export const experienceEntries = [
  {
    position: 'Cloud Part Time',
    company: 'at Insulet',
    period: 'April 2021 - May 2022',
    description: 'Design and implement backend services for the Omnipod 5 infraestructure.',
    stack: 'AWS, Python, and Java',
  },
  {
    position: 'Devops Intern',
    company: 'at Insulet',
    period: 'September 2020 - April 2021',
    description: 'Developed some scripts with python for automating the onboarding process.',
    stack: 'Ansible, Python, and Atlassian',
  },
  {
    position: 'Intern',
    company: 'at Nafiux',
    period: 'March 2020 - June 2020',
    description: 'Laid the first steps to build a computer cluster for public usage in Tijuana.',
    stack: 'Linux, Docker, and Wireguard',
  },
]

export const educationEntries = [
  {
    title: 'Computer Science',
    school: 'at CETYS',
    period: 'August 2018 - July 2022',
    description: 'Studied Computer Science at CETYS Universidad Campus Tijuana.',
  },
]

export const projectsEntries = [
  {
    title: 'La La Lang',
    image: lalalang,
    url: 'https://github.com/manoloesparta/lalalang',
    description: 'A programming language with a silly name and an online interpreter.',
    stack: 'Python, React, and AWS'
  },
  {
    title: 'Lost in Paradise',
    image: lostinp,
    url: 'https://github.com/manoloesparta/lostinparadise',
    description: 'Application for students to visualize which items are currently lost in school',
    stack: 'Python and React'
  },
  {
    title: 'Shrtnr',
    image: shrtnr,
    url: 'https://github.com/manoloesparta/wikigraph',
    description: 'Public URL shortener as an entry for the Cloudflare Developer Summer Challenge.',
    stack: 'JS and Clouflare Workers',
  },
  {
    title: 'Pi and Me',
    image: pi,
    url: 'https://github.com/manoloesparta/pi',
    description: 'Let\'s celebrate Pi day. Search any number, like your phone number in the digits of Pi.',
    stack: 'Go, Python, and JS', 
  },
  {
    title: 'HN Journal',
    image: hn,
    url: 'https://github.com/manoloesparta/hnjournal',
    description: 'Consume Hacker News in more random and funny ways. Over engineering dumb ideas.',
    stack: 'Go, JS, and Linux',
  },
]

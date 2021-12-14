import pi from './assets/pi.jpg'
import hn from './assets/hn.png'
import wiki from './assets/wiki.png'
import angry from './assets/angry.png'


export const experienceEntries = [
  {
    position: 'Backend Part Time',
    company: 'at Insulet',
    period: 'May 2021 - Today',
    description: 'Currenlty been working at the cloud team developing microservices.',
    stack: 'AWS, Python, and Java',
  },
  {
    position: 'Devops Intern',
    company: 'at Insulet',
    period: 'September 2020 - May 2021',
    description: 'Worked at the devops department with python and the Atlassian API.',
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
    period: 'August 2018 - Today',
    description: 'Currently studying Computer Science at a CETYS Universidad Campus Tijuana.',
  },
]

export const projectsEntries = [
  {
    title: 'Pi and Me',
    image: pi,
    url: 'https://github.com/manoloesparta/pi',
    description: 'Let\'s celebrate Pi day. Search any number, like your phone number in the digits of Pi.',
    stack: 'Go, Python, and HTML/CSS/JS',
  },
  {
    title: 'Wikigraph',
    image: wiki,
    url: 'https://github.com/manoloesparta/wikigraph',
    description: 'Check how far any wikipedia article from any other. Breath vs Depth Search.',
    stack: 'C++ and Python',
  },
  {
    title: 'HN Journal',
    image: hn,
    url: 'https://github.com/manoloesparta/hnjournal',
    description: 'Consume Hacker News in more random and funny ways. Over engineering dumb ideas.',
    stack: 'Go, HTML/CSS/JS, and Linux',
  },
  {
    title: 'Angry Guitar',
    image: angry,
    url: 'https://github.com/manoloesparta/angryguitar',
    description: 'Trying to imitate classic guitar distortion with a artificial neural network.',
    stack: 'Python and Keras/Tensorflow',
  },
]
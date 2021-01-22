// Imports
import './styles.css'

// Random numbers lesgooo
const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min)

// Generate a random emoji
const chosen = randomNumberRange(128512, 128567)
const emoji = document.getElementById('emoji')
emoji.innerHTML = `&#${chosen};`

// Change to Manolo Esparta
emoji.addEventListener('click', () => {
  const header = document.getElementById('header')
  header.innerHTML = 'Manolo Esparta'
})

// Social button
const github = document.getElementById('github')
github.addEventListener('click', () => {
  window.open('https://github.com/manoloesparta')
})

const twitter = document.getElementById('twitter')
twitter.addEventListener('click', () => {
  window.open('https://twitter.com/manoloesparta')
})

const discord = document.getElementById('discord')
discord.addEventListener('click', () => {
  if(discord.innerHTML == 'Discord') {
    discord.innerHTML = 'manoloesparta#2766'
  } else {
    discord.innerHTML = 'Discord'
  }
})

const linkedin = document.getElementById('linkedin')
linkedin.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/manuel-esparza-guzman-9b6948165/')
})

// Projects
const pi = document.getElementById('pi')
pi.addEventListener('click', () => {
  window.open('https://github.com/manoloesparta/pi')
})

const wiki = document.getElementById('wiki')
wiki.addEventListener('click', () => {
  window.open('https://github.com/manoloesparta/wikigraph')
})

const hn = document.getElementById('hn')
hn.addEventListener('click', () => {
  window.open('https://github.com/manoloesparta/hnjournal')
})

const guitar = document.getElementById('guitar')
guitar.addEventListener('click', () => {
  window.open('https://github.com/manoloesparta/angryguitar')
})
// Random numbers lesgooo
randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min)

// Generate a random emoji
const chosen = randomNumberRange(128512, 128567)
const emoji = document.getElementById('emoji')
emoji.innerHTML = `&#${chosen};`

// Add that emoji to the title
const title = document.getElementsByTagName('title')[0]
title.innerHTML = `&#${chosen}; ` + title.innerHTML

// Change to Manolo Esparta
emoji.addEventListener('click', () => {
    const header = document.getElementById('header')
    header.innerHTML = 'Manolo Esparta'
})
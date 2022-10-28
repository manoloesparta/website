import React from 'react';
import { useEffect, useState } from "react"

const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function Header() {
  const description = `Software engineer with experience in cloud, frontend, and backend development. Also interested in systems and compilers.`
  
  useEffect(() => {
    const chosen = randomNumberRange(128512, 128567)
    const emojiElement = document.getElementById('emoji')
    emojiElement.innerHTML = `&#${chosen};`
  }, [])

  const [name, setName] = useState('Manuel Esparza')
  const nameHandler = () => setName('Manolo Esparta')

  return (
    <header>
      <h1>
        <span id="emoji" onClick={nameHandler}></span> 
        <span> {name}</span>
      </h1>
      <p>{description}<span class="bold"> Never stop learning.</span></p>
    </header>
  )
}

import { useEffect, useState } from "react"

const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function Header() {
  const description = "I’m a wannabe Cloud Software Engineer with professional experience back-end development and devops. Interested in mostly in back-end development (and some front-end), cloud infrastructure, systems, programming languages, and CS in general."
  
  useEffect(() => {
    const chosen = randomNumberRange(128512, 128567)
    const emojiElem = document.getElementById('emoji')
    emojiElem.innerHTML = `&#${chosen};`
  }, [])

  const [name, setName] = useState('Manuel Esparza')
  const nameHandler = () => {
    setName('Manolo Esparta')
  }

  return (
    <header>
      <h1>
        <span id="emoji" onClick={nameHandler}></span> 
        <span id="header" onClick={nameHandler}> {name}</span>
      </h1>
      <p>{description}<span class="bold">Never stop learning.</span></p>
    </header>
  )
}
import { useState } from 'react'
import me from '../assets/me.jpg' 


export default function WhoAmI() {
  const openLinkedin = () => window.open('https://www.linkedin.com/in/manuel-esparza-9b6948165/')
  const openGithub = () => window.open('https://github.com/manoloesparta')

  const [discordButton, setDiscordButton] = useState('Discord')
  const discordHandler = () => {
    if(discordButton === 'Discord') {
      setDiscordButton('manoloesparta#2766')
    } else {
      setDiscordButton('Discord')
    }
  }

  return (
    <div>
      <h2>Who am I?</h2>
      <hr/>

      <div class="wrapper block">
        <img class="picture" src={me} alt="this is me"/>
      </div>

      <div class="description">
        <p>Hello there, here is a picture of me.</p>
        <p>I'm 22 years old, passionate about camping, ssbm, synthetizers, guitars, and computer science stuff.</p>
        <p>Currently learning about microservices, software engineering, and (sometimes) full stack things.</p>
        <p><span class="bold">Programming Languages: </span>Python, Java, Go, Typescript, C, C++, HTML/CSS/JS</p>
        <p><span class="bold">Frameworks: </span>Flask, Django, Vertx, Express, React</p>
        <p><span class="bold">Tools: </span>AWS, Linux, Docker, Git</p>

        <button onClick={openGithub} class="block social">Github</button>
        <button onClick={openLinkedin} class="block social">Linkedin</button>
        <button onClick={discordHandler} class="block social">{discordButton}</button>
      </div>
    </div>
  )
}
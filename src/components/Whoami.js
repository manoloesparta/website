import { useState } from 'react'
import me from '../assets/me.jpg' 


export default function WhoAmI() {
  const openLinkedin = () => window.openUrl('https://www.linkedin.com/in/manuel-esparza-guzman-9b6948165/')
  const openGithub = () => window.openUrl('https://github.com/manoloesparta')

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
        <p>Here is a picture of me, not the greatest at smiling in pcitures (sorry mom).</p>
        <p>I'm 22 years old, love camping, SSBM (and other fighting games), music, synthetizers, guitars, and computer science realted stuff.</p>
        <p>Currently reading about microservices and asynchronous programming, and trying to do an ollie without breaking a leg.</p>
        <p><span class="bold">Tools: </span>AWS, Linux, Docker, Git/Github</p>
        <p><span class="bold">Programming: </span>Python, Java, Golang, Node JS, C/C++, React</p>

        <button onClick={openGithub} class="block social">Github</button>
        <button onClick={openLinkedin} class="block social">Linkedin</button>
        <button onClick={discordHandler} class="block social">{discordButton}</button>
      </div>
    </div>
  )
}
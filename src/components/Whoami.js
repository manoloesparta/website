import React from 'react';
import me from '../assets/me.jpg' 


export default function WhoAmI() {
  const openLinkedin = () => window.open('https://www.linkedin.com/in/manuel-esparza-9b6948165/')
  const openGithub = () => window.open('https://github.com/manoloesparta')

  return (
    <div >
      <h2>Who am I?</h2>
      <hr/>

      <div class="custom-head">
        <div class="pic wrapper block">
          <img class="picture" src={me} alt="this is me"/>
        </div>

        <div class="description">
          <p><span class="bold">Languages: </span>Java, Python, Go, Typescript, C/C++</p>
          <p><span class="bold">Frontend: </span>React & Redux, Redwood, Tailwind</p>
          <p><span class="bold">Backend: </span>Flask, Django, Vertx, Express</p>
          <p><span class="bold">Cloud Tools: </span>AWS, Linux, Docker, OCI, Terraform, Kubernetes</p>

          <div class="buttons">
            <button onClick={openGithub} class="block social">Github</button>
            <button onClick={openLinkedin} class="block social">Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  )
}

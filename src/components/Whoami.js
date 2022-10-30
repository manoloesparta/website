import React from 'react';
import me from '../assets/me.jpg' 
import { Hr } from './utils';


export default function WhoAmI() {
  const openLinkedin = () => window.open('https://www.linkedin.com/in/manuel-esparza-9b6948165/')
  const openGithub = () => window.open('https://github.com/manoloesparta')

  return (
    <div className='p-5 pb-0'>
      <h2 className='text-2xl font-semibold'>Who am I?</h2>
      <Hr />
      <div className='flex'>
        <div class="wrapper block flex-non" style={{maxWidth: 250, justifySelf: "end"}}>
          <img class="picture" src={me} alt="this is me"/>
        </div>

        <div class="description flex-2 ml-5">
          <p><span class="font-semibold">Languages: </span>Java, Python, Go, Typescript, C/C++</p>
          <p><span class="font-semibold">Cloud: </span>AWS, Linux, Docker, OCI, Terraform, Kubernetes</p>
          <p><span class="font-semibold">Backend: </span>Flask, Django, Vertx, Express</p>
          <p><span class="font-semibold">Frontend: </span>React & Redux, Redwood, Tailwind</p>

          <div className='grid grid-cols-4 mt-3'>
            <button onClick={openGithub} class="block social">Github</button>
            <button onClick={openLinkedin} class="block social">Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  )
}

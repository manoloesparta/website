import React from 'react';
import { projectsEntries } from '../data'

function Card({title, description, stack, image, url}) {
  const openUrl = () => window.open(url)

  return (
    <div onClick={openUrl} class='card wrapper block'>
      <h3><span class='bold'>{title}</span></h3>
      <hr/>
      <img src={image} alt='Project logo'/>
      <p>{description}</p>
      <hr/>
      <p>{stack}</p>
    </div>
  )
}

export default function Project() {
  return (
    <div>
      <h2>Projects</h2>
      <hr/>

      {projectsEntries.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          stack={item.stack}
          image={item.image}
          url={item.url}/>
      ))}
    </div>
  )
}
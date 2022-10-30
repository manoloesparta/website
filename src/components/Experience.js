import React from 'react';
import { experienceEntries } from "../data"
import { Hr } from './utils';


function Card({position, company, period, description, stack}) {
  return (
    <div class="card wrapper block">
      <h3><span class="bold">{position}</span> {company}</h3>
      <Hr />
      <small>{period}</small>
      <p>{description}</p>
      <Hr />
      <p>{stack}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <div className='p-5 pb-0'>
      <h2 className='text-2xl font-semibold'>Experience</h2>
      <Hr />
      <div className="grid grid-cols-3 gap-4 place-content-center">
        {experienceEntries.map((item, index) => (
          <Card 
            key={index}
            position={item.position}
            company={item.company}
            period={item.period}
            description={item.description}
            stack={item.stack}/>
        ))}
      </div>
    </div>
  )
}
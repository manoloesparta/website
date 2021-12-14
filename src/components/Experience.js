import { experienceEntries } from "../data"


function Card({position, company, period, description, stack}) {
  return (
    <div class="card wrapper block">
      <h3><span class="bold">{position}</span> {company}</h3>
      <hr/>
      <small>{period}</small>
      <p>{description}</p>
      <hr/>
      <p>{stack}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <hr/>
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
  )
}
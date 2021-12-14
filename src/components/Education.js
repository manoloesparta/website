import { educationEntries } from "../data"


function Card({title, school, period, description}) {
  return (
    <div class="card wrapper block">
      <h3><span class="bold">{title}</span> {school}</h3>
      <hr/>
      <small>{period}</small>
      <p>{description}</p>
    </div>
  )   
}

export default function Education() {
  return (
    <div>
      <h2>Education</h2>
      <hr/>
      {educationEntries.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          school={item.school}
          period={item.period}
          description={item.description}/>
      ))}
    </div>
  )
}
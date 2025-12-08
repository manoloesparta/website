import { experienceEntries, type ExperienceEntry } from "../data";
import { Hr } from "./utils";

interface CardProps extends ExperienceEntry {}

function Card({ position, company, period, description, stack, url }: CardProps) {
  const openUrl = () => window.open(url);

  return (
    <div onClick={openUrl} className="card wrapper block">
      <h3>
        <span className="bold">{position}</span> {company}
      </h3>
      <Hr />
      <small>{period}</small>
      <p>{description}</p>
      <Hr />
      <p>{stack}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="p-5 pb-0 mt-12">
      <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Experience</h2>
      <Hr />
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6 justify-items-center md:justify-items-start">
        {experienceEntries.map((item, index) => (
          <Card
            key={index}
            position={item.position}
            company={item.company}
            period={item.period}
            description={item.description}
            stack={item.stack}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

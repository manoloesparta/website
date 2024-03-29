import React from "react";
import { educationEntries } from "../data";
import { Hr } from "./utils";

function Card({ title, school, period, description, url }) {
  const openUrl = () => window.open(url);

  return (
    <div onClick={openUrl} className="card wrapper block">
      <h3>
        <span className="bold">{title}</span> {school}
      </h3>
      <Hr />
      <small>{period}</small>
      <p>{description}</p>
    </div>
  );
}

export default function Education() {
  return (
    <div className="p-5 pb-0">
      <h2 className="text-2xl font-semibold">Education</h2>
      <Hr />
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 place-content-center">
        {educationEntries.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            school={item.school}
            period={item.period}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

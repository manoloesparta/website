import React from "react";
import { projectsEntries } from "../data";
import { Hr } from "./utils";

function Card({ title, description, stack, image, url }) {
  const openUrl = () => window.open(url);

  return (
    <div onClick={openUrl} className="card wrapper block">
      <h3>
        <span className="bold">{title}</span>
      </h3>
      <Hr />
      <img src={image} alt="Project logo" />
      <p>{description}</p>
      <Hr />
      <p>{stack}</p>
    </div>
  );
}

export default function Project() {
  return (
    <div className="p-5 pb-0">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <Hr />

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 place-content-center">
        {projectsEntries.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            stack={item.stack}
            image={item.image}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

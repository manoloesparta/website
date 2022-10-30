import React from "react";
import me from "../assets/me.jpg";
import { Hr } from "./utils";

export default function WhoAmI() {
  const openLinkedin = () =>
    window.open("https://www.linkedin.com/in/manuel-esparza-9b6948165/");
  const openGithub = () => window.open("https://github.com/manoloesparta");

  return (
    <div className="p-5 pb-0">
      <h2 className="text-2xl font-semibold">Who am I?</h2>
      <Hr />
      <div className="xl:flex lg:flex md:flex">
        <div className="pic wrapper block" style={{ maxWidth: 250 }}>
          <img className="picture" src={me} alt="this is me" />
        </div>

        <div className="flex-2 sm:flex-none ml-5 mt-3">
          <p>
            <span className="font-semibold">Languages: </span>Java, Python, Go,
            Typescript, C/C++
          </p>
          <p>
            <span className="font-semibold">Cloud: </span>AWS, Linux, Docker,
            OCI, Terraform, Kubernetes
          </p>
          <p>
            <span className="font-semibold">Backend: </span>Flask, Django,
            Vertx, Express
          </p>
          <p>
            <span className="font-semibold">Frontend: </span>React & Redux,
            Redwood, Tailwind
          </p>

          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-3">
            <button onClick={openGithub} className="block social">
              Github
            </button>
            <button onClick={openLinkedin} className="block social">
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

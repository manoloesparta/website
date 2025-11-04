import React from "react";
import me from "../assets/me2.jpg";
import { Hr } from "./utils";

export default function WhoAmI() {
  const openLinkedin = () =>
    window.open("https://www.linkedin.com/in/manuel-esparza-9b6948165/");
  const openGithub = () => window.open("https://github.com/manoloesparta");
  const openResume = () => window.open("./FULLSTACK_DEVELOPER_CV_MANUEL_ESPARZA_GUZMAN.pdf");
  const openBlog = () => window.open("https://blog.mano.lol");

  return (
    <div className="p-5 pb-0 pt-10">
      <h2 className="text-2xl font-semibold">Manuel Esparza Guzman</h2>
      <Hr />
      <div className="text-center">
        <div
          className="pic wrapper block object-contain"
          style={{ maxWidth: 250 }}
        >
          <img className="picture object-cover" src={me} alt="this is me" />
        </div>

        <div className="flex-2 sm:flex-none overflow-hidden">
          <p className="mb-2 text-wrap text-justify">
            I'm a software engineer based in Guadalajara, Mexico, with
            experience working across backend, frontend, and cloud
            infrastructure. I studied Computer Science at CETYS Universidad,
            where I focused on AI, and since then I've been building scalable
            systems and tools in real-world environments. Right now, I work at
            Oracle, where I'm involved in a little bit of everything—from
            backend development in Java, a lightweight agent for compute
            instance in Go, operate and enhance a Kubernetes cluter, to
            creating production-ready React apps based on Figma designs.
          </p>

          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-3 mt-3">
            <button onClick={openResume} className="block social">
              Resume
            </button>
            <button onClick={openGithub} className="block social">
              Github
            </button>
            <button onClick={openLinkedin} className="block social">
              Linkedin
            </button>
            <button onClick={openBlog} className="block social">
              Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

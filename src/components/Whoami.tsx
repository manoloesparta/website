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
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Manuel Esparza Guzman</h1>
      <Hr />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-8">
        <div className="flex-shrink-0">
          <img className="picture mx-auto" src={me.src} alt="Manuel Esparza" />
        </div>

        <div className="flex-1">
          <p className="mb-6 text-lg leading-relaxed text-justify">
            I'm a software engineer based in Guadalajara, Mexico, with
            experience working across backend, frontend, and cloud
            infrastructure. I studied Computer Science at CETYS Universidad,
            where I focused on AI, and since then I've been building scalable
            systems and tools in real-world environments.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-justify">
            I'm passionate about building robust systems and creating great user experiences,
            working across the full stack—from backend development in Java and Go, to
            operating Kubernetes clusters, to creating production-ready React applications
            based on Figma designs.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            <button onClick={openResume} className="block social px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
              Resume
            </button>
            <button onClick={openGithub} className="block social px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
              Github
            </button>
            <button onClick={openLinkedin} className="block social px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
              Linkedin
            </button>
            <button onClick={openBlog} className="block social px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
              Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

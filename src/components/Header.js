import React from "react";
import { useEffect, useState } from "react";

const randomNumberRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export default function Header() {
  useEffect(() => {
    const chosen = randomNumberRange(128512, 128567);
    const emojiElement = document.getElementById("emoji");
    emojiElement.innerHTML = `&#${chosen};`;
  }, []);

  const [name, setName] = useState("Manuel Esparza");
  const nameHandler = () => setName("Manolo Esparta");

  return (
    <div className="p-5 pb-0">
      <h1 className="font-semibold mb-5" style={{ fontSize: 30 }}>
        <span id="emoji" onClick={nameHandler}></span>
        <span> {name}</span>
      </h1>
      <p className="text-lg">
        Software engineer with experience in cloud, frontend, and backend
        development.
      </p>
      <p className="text-lg">Also interested in systems and compilers.</p>
      <p className="text-lg font-semibold">Never stop learning.</p>
    </div>
  );
}

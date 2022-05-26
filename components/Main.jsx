import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            Build something together
          </p>
          <h1 className="py-4 text-gray-700 font-bold text-4xl sm:text-5xl md:text-6xl">
            Hi, I am <span className="text-sky-800">Williams</span>
          </h1>
          <h1 className="py-2 text-gray-700 font-bold text-4xl sm:text-5xl md:text-6xl">
            A Full-Stack Web Developer
          </h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I am a Full-Stack Web Developer. Currently, I am focused on building
            responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/williams-bournissent/"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                target="_blank"
                href="https://github.com/Williamssb"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="williams-resume.pdf" download="williams-resume.pdf">
                <BsPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

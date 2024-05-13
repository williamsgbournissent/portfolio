import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
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
            <a
              target="_blank"
              href="https://www.linkedin.com/in/williams-bournissent/"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-[23px]" />
              </div>
            </a>
            <a
              target="_blank"
              href="https://github.com/williamsgbournissent"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-[23px]" />
              </div>
            </a>
            <a href="/williams_resume.pdf" download target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <MdPictureAsPdf className="text-[23px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

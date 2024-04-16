import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-sky-800">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am studying Computer Science at UP.
          </p>
          <p className="py-2 text-gray-600">
            I consider myself an enthusiast of new technologies, passionate
            about my career, and always seeking to improve my skills and apply
            my knowledge to new projects.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

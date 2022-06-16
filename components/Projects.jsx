import React from "react";
import ProjectItem from "./ProjectItem";
import CineflixImg from "../public/assets/projects/cineflix.jpg";
import DeFiImg from "../public/assets/projects/defi.jpg";
import MercadoLiebreImg from "../public/assets/projects/mercadoliebre.jpg";
import WeatherImg from "../public/assets/projects/weather.jpg";
import cryptoImg from "../public/assets/projects/cryptolegacy.jpg";
import EcoPlaceImg from "../public/assets/projects/ecoplace.jpg";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="rounded-x1 grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="CryptoLegacy"
            backgroundImg={cryptoImg}
            projectUrl="/cryptolegacy"
            tech="React JS, Tailwind, Firebase & CoinGecko API"
          />
          <ProjectItem
            title="Cineflix"
            backgroundImg={CineflixImg}
            projectUrl="/cineflix"
            tech="React JS, Firebase & Movies API"
          />
          <ProjectItem
            title="ecoPlace"
            backgroundImg={EcoPlaceImg}
            projectUrl="/ecoPlace"
            tech="EJS, Node.js, SQL & CSS"
          />
          <ProjectItem
            title="DeFi App"
            backgroundImg={DeFiImg}
            projectUrl="/Defi"
            tech="React JS & CSS"
          />
          <ProjectItem
            title="MercadoLiebre"
            backgroundImg={MercadoLiebreImg}
            projectUrl="/mercadoliebre"
            tech="HTML & CSS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={WeatherImg}
            projectUrl="/weather"
            tech="React JS & weather API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

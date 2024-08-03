import React, { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../state";
import { projects } from "../utils/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import CustomButton from "./CustomButton";

function ProjectsSlide() {
  const bgGradiant =
    "bg-gradient-to-r from-[#0794D0] via-blue-800  to-[#9E00FF]";
  const snap = useSnapshot(state);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: width > 768 ? true : false,
  };
  return (
    <section className="w-[100vw] flex items-center justify-center">
      <Slider
        className="lg:w-[60vw] md:w-[80vw] w-[90vw] min-h-[80vh]"
        {...settings}
      >
        {projects.map((project, index) => {
          return (
            <div
              className={`flex flex-col items-center justify-center`}
              key={index}
            >
              <div
                className={`flex flex-col items-center justify-center min-h-[70vh]`}
              >
                <div
                  className={`text-white rounded-2xl flex flex-col items-center justify-center`}
                >
                  <div
                    className={`flex flex-col items-center justify-center gap-5`}
                  >
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className={`lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] rounded-2xl h-[50%]`}
                    />
                    <h1
                      className={`text-3xl text-center font-semibold text-blue-500`}
                    >
                      {project.title}
                    </h1>
                    <p className={`text-lg text-center `}>
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-5 justify-center mt-5`}
                  >
                    {project?.github && (
                      <a href={project.github} target="_blank">
                        <CustomButton text={"Source Code"} />
                      </a>
                    )}
                    {project?.link && (
                      <a href={project.link} target="_blank">
                        <CustomButton text={"Live Demo"} isFilled={true} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default ProjectsSlide;

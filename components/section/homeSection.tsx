"use client";

import ScrollToSection from "@/utils/scrollToSection";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

const HomeSection = () => {
  return (
    <section
      className="min-h-[calc(100vh-5rem)] w-full bg-slate-100 shadow-sm"
      id="home"
    >
      {/* contact */}
      <div className="absolute top-[calc((100vh-8rem)/2)] z-30 rounded-r-lg bg-white px-2 py-4 shadow-md sm:left-1/2 sm:top-[calc(100vh-6rem)] sm:-translate-x-1/2 sm:rounded-md sm:px-4">
        <ul className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <li className="text-3xl hover:scale-110 hover:text-sky-600">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/apisid-phothidong/"
            >
              <AiFillLinkedin />
            </a>
          </li>

          <li className="text-3xl hover:scale-110">
            <a target="_blank" href="https://github.com/NaSitTH">
              <AiFillGithub />
            </a>
          </li>
          <li className="text-3xl hover:scale-110 hover:text-red-500">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCcF7P_oDZum8ANt-8zdw9vA"
            >
              <AiFillYoutube />
            </a>
          </li>
          <li className="text-3xl hover:scale-110 hover:text-blue-500">
            <a target="_blank" href="mailto:apisid_ph@hotmail.com">
              <BiMailSend />
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-10 lg:space-y-8">
        <h1 className="mt-[calc(100vh/3.5)] text-center text-5xl font-bold leading-8 tracking-widest lg:text-4xl md:mt-28 md:flex md:flex-col md:space-y-8 sm:text-3xl">
          <span>Hi, I&apos;M</span> <span> APISID PHOTHIDONG</span>
        </h1>
        <p className="mx-auto max-w-xl pb-2 text-center text-lg leading-8 text-neutral opacity-90 lg:max-w-md md:flex md:max-w-sm md:flex-col md:space-y-1 sm:max-w-xs sm:text-base">
          <span>
            Experienced Maintenance Engineer with a Strong Desire to Transition
            into
          </span>
          <b> Full Stack Developer.</b>
        </p>
        <button
          className="btn btn-info btn-wide font-semibold tracking-wider text-white shadow-md hover:scale-105"
          onClick={() => ScrollToSection("project")}
        >
          PROJECTS
        </button>
      </div>
    </section>
  );
};
export default HomeSection;

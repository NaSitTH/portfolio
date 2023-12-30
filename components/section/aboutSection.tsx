"use client";

import ScrollToSection from "@/utils/scrollToSection";

const skills = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Vite",
  "C#",
  ".Net Core",
  "EF Core",
  "Postgres",
  "Azure",
  "Git",
  "Github",
  "Figma",
  "VS Code",
  "Terminal",
  "Basic Docker",
  "Self Learning",
];

const AboutSection = () => {
  return (
    <section className="w-full py-24" id="about">
      <h1 className="text-center text-4xl font-bold leading-8">ABOUT ME</h1>
      <p className="mx-auto mt-8 max-w-2xl text-center leading-8 text-neutral opacity-90 lg:max-w-xl md:max-w-lg sm:max-w-sm xs:px-8">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="mx-auto mt-16 flex max-w-6xl space-x-24 leading-7 text-neutral opacity-90 xl:max-w-4xl lg:max-w-2xl lg:flex-col lg:space-x-0 lg:space-y-16 md:max-w-lg sm:px-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Get to know me!</h1>
          <p className="mt-8">
            Hi, I&apos;m Apisid, an aspiring <b>Fullstack Developer.</b>
          </p>
          <p className="mt-4">
            I started my career as a maintenance engineer in the manufacturing,
            where I cultivated strong problem-solving skills. However, my true
            passion has always been in
            <b> Coding </b>
            and
            <b> Web Development.</b>
          </p>
          <p className="mt-4">
            What excites me most about web development is the opportunity to
            create digital experiences that solve<b> Real-world problems. </b>
            I&apos;m constantly <b>Learning </b>
            and
            <b> Exploring new technologies </b>
            to stay at the forefront of the industry.
          </p>
          <p className="mt-4">
            Feel free to connect with me on{" "}
            <a
              className="link link-info"
              target="_blank"
              href="https://www.linkedin.com/in/apisid-phothidong/"
            >
              LinkedIn
            </a>{" "}
            to explore potential
            <b> Collaborations </b>
            and
            <b> Opportunities. </b>
          </p>

          <button
            className="btn btn-info mt-8 px-10 font-semibold text-white shadow-md hover:scale-105"
            onClick={() => ScrollToSection("contact")}
          >
            CONTACT
          </button>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold">My Skills</h1>
          <ul className="mt-8 flex flex-wrap items-center">
            {skills.map((item) => {
              return (
                <li
                  key={item}
                  className="m-2 rounded-md bg-slate-200 px-4 py-2"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

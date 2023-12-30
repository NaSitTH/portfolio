import { IMarkdown } from "@/interface/markdown";
import ProjectHero from "../projectHero";

type Props = {
  projects: IMarkdown[];
};

const ProjectSection = ({ projects }: Props) => {
  return (
    <section className="w-full bg-slate-100 py-24" id="project">
      <h1 className="text-center text-4xl font-bold leading-8">Projects</h1>
      <p className="mx-auto mt-8 max-w-2xl text-center leading-8 text-neutral opacity-90 lg:max-w-xl md:max-w-lg sm:max-w-sm xs:px-8">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col space-y-20 xl:max-w-4xl lg:max-w-2xl md:max-w-lg sm:px-8">
        {projects &&
          projects.map((data) => {
            return (
              <ProjectHero
                key={data.title}
                title={data.title}
                excerpt={data.excerpt}
                image={data.coverImage}
                url={`/projects/${data.slug}`}
              />
            );
          })}
      </div>
    </section>
  );
};
export default ProjectSection;

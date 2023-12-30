import Head from "next/head";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/utils/loadMarkdown";
import { markdownToHtml } from "@/utils/markdownToHtml";
import LinkToRepo from "@/components/linkToRepo";
import { IMarkdown } from "@/interface/markdown";
import { Layout } from "@/components/layout";

type Props = {
  project: IMarkdown;
};

const ProjectId = ({ project }: Props) => {
  const toolArr = project.tool ? project.tool.split(",") : [];

  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex min-h-[calc(100vh-5rem)] w-full flex-col items-center space-y-12 bg-slate-100 py-28 sm:space-y-10">
          <h1 className="text-center text-5xl font-bold leading-8 tracking-wider sm:text-4xl">
            {project.title}
          </h1>
          <p className="max-w-5xl indent-10 leading-8 xl:max-w-4xl lg:max-w-2xl md:max-w-xl sm:mx-8">
            {project.excerpt}
          </p>

          {project.githubLink && <LinkToRepo link={project.githubLink} />}
        </div>

        {/* markdown content */}
        <article className="mx-auto mt-20 max-w-4xl xl:max-w-3xl lg:max-w-xl md:max-w-lg sm:mx-10">
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <h1 className="text-2xl font-semibold">Tools Used</h1>
            <ul className="mt-4 flex flex-wrap items-center">
              {toolArr &&
                toolArr.map((item) => {
                  return (
                    <li
                      key={item}
                      className="mr-4 mt-4 rounded-md bg-slate-200 px-4 py-2"
                    >
                      {item}
                    </li>
                  );
                })}
            </ul>
          </div>
        </article>

        <nav className="flex items-center justify-center space-x-6 py-16">
          <Link className="btn" href="/#project">
            GO BACK
          </Link>

          {project.githubLink && <LinkToRepo link={project.githubLink} />}
        </nav>
      </Layout>
    </>
  );
};
export default ProjectId;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const project = getProjectBySlug(params.slug, [
    "title",
    "excerpt",
    "coverImage",
    "slug",
    "githubLink",
    "tool",
    "content",
  ]);

  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
};

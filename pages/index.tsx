import Head from "next/head";
import { ReactElement } from "react";
import { Inter } from "next/font/google";
import { NextPageWithLayout } from "./_app";
import { getAllProjects } from "@/utils/loadMarkdown";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  ProjectSection,
} from "@/components/section";
import { IMarkdown } from "@/interface/markdown";
import { Layout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  [key: string]: IMarkdown[];
};

const Home: NextPageWithLayout = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Apisid Phothidong</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <HomeSection />
        <AboutSection />
        <ProjectSection projects={projects} />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "title",
    "excerpt",
    "coverImage",
    "date",
    "slug",
  ]);

  return {
    props: {
      projects: projects,
    },
  };
};

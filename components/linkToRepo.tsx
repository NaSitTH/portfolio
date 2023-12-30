import { AiFillGithub } from "react-icons/ai";

type Props = {
  link: string;
};

const myGithub = "https://github.com/NaSitTH";

const LinkToRepo = ({ link }: Props) => {
  const repoLink = link === "private" ? myGithub : link;

  return (
    <a className="btn btn-neutral" target="_blank" href={repoLink}>
      <span className="text-xl">
        <AiFillGithub />
      </span>
      <span>
        {link === "private" ? "Private Repo, See More Repo" : "Project Repo"}
      </span>
    </a>
  );
};
export default LinkToRepo;

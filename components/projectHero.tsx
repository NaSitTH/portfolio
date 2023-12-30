import Image from "next/image";
import Link from "next/link";

type Props = {
  [key: string]: string;
};

const ProjectHero = ({ title, excerpt, image, url }: Props) => {
  return (
    <div className="flex space-x-12 xl:flex-col xl:space-x-0 xl:space-y-8">
      <h1 className="hidden text-center text-3xl font-bold xl:inline-block">
        {title}
      </h1>
      <div className="w-full xl:flex xl:justify-center">
        <Image
          src={image}
          alt={`Picture of ${title} screenshot`}
          className="rounded-lg shadow-2xl"
          width={600}
          height={600}
        />
      </div>
      <div className="w-full space-y-6 xl:flex xl:flex-col xl:items-center">
        <h1 className="text-3xl font-bold xl:hidden">{title}</h1>
        <p className="indent-10 leading-7 opacity-80 xl:max-w-3xl lg:max-w-xl">
          {excerpt}
        </p>
        <Link
          className="btn btn-info px-10 font-semibold text-white shadow-md hover:scale-105"
          href={url}
        >
          CASE STUDY
        </Link>
      </div>
    </div>
  );
};
export default ProjectHero;

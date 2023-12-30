import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral py-16 text-white">
      <div className="mx-auto flex h-full max-w-6xl justify-between xl:max-w-4xl lg:max-w-2xl md:mx-8 sm:flex-col sm:space-y-8">
        <aside>
          <h1 className="text-3xl font-semibold leading-8 sm:text-center">
            Apisid Phothidong
          </h1>
          <p className="mt-4 max-w-lg leading-7 lg:max-w-sm md:max-w-xs sm:mx-auto sm:max-w-md sm:text-center">
            Experienced Maintenance Engineer with a Strong Desire to Transition
            into Full Stack Developer.
          </p>
        </aside>
        <div>
          <h1 className="text-center text-2xl font-semibold leading-8 tracking-wider sm:tracking-normal">
            Let&apos;s Connect
          </h1>
          <ul className="mt-4 flex space-x-5 sm:justify-center">
            <li className="text-3xl hover:scale-110 hover:text-sky-600 ">
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
      </div>
    </footer>
  );
};
export default Footer;

import { usePathname } from "next/navigation";
import Link from "next/link";
import ScrollToSection from "@/utils/scrollToSection";

type Props = {
  isOpenNav?: boolean;
  handleOpenNav: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Navbar = ({ isOpenNav, handleOpenNav }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {/* Nav */}
      {pathname.includes("project") ? (
        // for only project page
        <Link className="btn md:hidden" href="/#project">
          GO BACK
        </Link>
      ) : (
        // for large screen width
        <nav className="md:hidden">
          <ul className="flex items-center space-x-12 font-semibold lg:space-x-8">
            <li className="hover:text-sky-400">
              <button onClick={() => ScrollToSection("home")}>HOME</button>
            </li>
            <li className="hover:text-sky-400">
              <button onClick={() => ScrollToSection("about")}>ABOUT</button>
            </li>
            <li className="hover:text-sky-400">
              <button onClick={() => ScrollToSection("project")}>
                PROJECTS
              </button>
            </li>
            <li className="btn btn-neutral hover:scale-105">
              <button onClick={() => ScrollToSection("contact")}>
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* hamburger */}
      {pathname.includes("project") ? (
        // for only project page
        <Link className="btn hidden md:inline-flex" href="/#project">
          GO BACK
        </Link>
      ) : (
        // for small screen width
        <div className="hidden md:inline-flex">
          <label className="btn btn-circle swap swap-rotate">
            <input
              className="drawer-toggle"
              id="drawer"
              type="checkbox"
              checked={isOpenNav}
              onChange={handleOpenNav}
            />
            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {/* nav transition */}
          <div
            className={`${
              isOpenNav
                ? "translate-x-0 opacity-100"
                : "translate-x-[50vw] opacity-100"
            } fixed right-0 top-20 z-50 h-[calc(100vh-5rem)] w-1/2 bg-white shadow-md duration-300 ease-in-out`}
          >
            {/* Nav */}
            <nav className="p-5">
              <ul className="flex flex-col space-y-5 font-semibold">
                <li className="btn hover:text-sky-400">
                  <button onClick={() => ScrollToSection("home")}>HOME</button>
                </li>
                <li className="btn hover:text-sky-400">
                  <button onClick={() => ScrollToSection("about")}>
                    ABOUT
                  </button>
                </li>
                <li className="btn hover:text-sky-400">
                  <button onClick={() => ScrollToSection("project")}>
                    PROJECTS
                  </button>
                </li>
                <li className="btn btn-neutral hover:scale-105">
                  <button onClick={() => ScrollToSection("contact")}>
                    CONTACT
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;

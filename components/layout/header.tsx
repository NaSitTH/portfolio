import Link from "next/link";
import { useState } from "react";
import Backdrop from "../backdrop";
import Navbar from "../navbar";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleOpenNav = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpenNav(e.target.checked);
  };

  const handleCloseNav = () => {
    setIsOpenNav(false);
  };

  return (
    <header
      className={`sticky left-0 top-0 z-50 h-20 min-w-full bg-white text-neutral-800 ${
        isOpenNav ? "shadow-none" : "shadow-md"
      }`}
      id="header"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between xl:max-w-4xl lg:max-w-2xl md:mx-8">
        {/* Logo */}
        <Link
          className="text-2xl font-semibold leading-8 text-neutral hover:text-sky-400 hover:shadow-none"
          href="/"
        >
          Apisid Phothidong
        </Link>

        {/* Nav */}
        <Navbar isOpenNav={isOpenNav} handleOpenNav={handleOpenNav} />
        {isOpenNav && <Backdrop handleClose={handleCloseNav} />}
      </div>
    </header>
  );
};
export default Header;

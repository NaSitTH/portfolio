import Link from "next/link";

type Props = {
  username: string;
};

const HeaderAdmin = ({ username }: Props) => {
  return (
    <header
      className="sticky left-0 top-0 z-50 h-20 min-w-full bg-white text-neutral-800 shadow-md"
      id="header"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between xl:max-w-4xl lg:max-w-2xl md:mx-8">
        {/* Logo */}
        <h1 className="cursor-text text-2xl font-semibold leading-8 tracking-wider text-neutral">
          Hi! {username}
        </h1>

        {/* Nav */}
        <nav className="flex space-x-4">
          <Link className="btn hover:scale-105" href="/">
            GO BACK
          </Link>
          <Link
            className="btn btn-neutral hover:scale-105"
            href="/api/auth/logout"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default HeaderAdmin;

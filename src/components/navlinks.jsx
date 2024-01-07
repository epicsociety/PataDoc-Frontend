import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className=" flex flex-col py-2 pl-3 pr-4 text-black sm-text-xl  md:p-0 text-center rounded-md w-auto  duration-500 hover:-translate-y-1 hover:text-green-600 "
    >
      {title}
    </Link>
  );
};

export default NavLink;

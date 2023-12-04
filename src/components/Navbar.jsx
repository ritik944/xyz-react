import { GrLanguage } from "react-icons/gr";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
// import link form react scroll
import { Link } from "react-scroll";

const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false);

  const toggelmenu = () => {
    setismenuopen(!ismenuopen);
  };

  const navitems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Princing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-3xl border-b mx-aut0 text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className=" flex space-x-14 items-center">
            <a
              href="/"
              className=" text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>EVERTH PC</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navitems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block 
                     hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* language and signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              Language
            </a>
            <button
              className="bg-secondary py-2 px-4 transition-all duration-300 rounded 
                 hover:text-white hover:bg-indigo-600"
            >
              Sign up
            </button>
          </div>

          {/*menu button only on mobile display  */}
          <div className=" md:hidden ">
            <button
              onClick={toggelmenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {ismenuopen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/*nav item for mobile devices*/}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary  text-xl ${
          ismenuopen ? "block fixed top-0 right-0 left-0 " : "hidden"
        }`}
      >
        {navitems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-90}
            key={link}
            to={path}
            className="block text-white hover:text-gray-300 "
            onClick={toggelmenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider.js';

const links = [
  <a
    key="home"
    id="home"
    href="#home"
    className="text-xl text-slate-200 justify-center py-4 lg:py-auto  px-4 lg:px-auto w-full lg:w-auto  lg:hover:text-slate-50 flex items-center gap-2 tracking-wider  "
  >
    Home
  </a>,
  <a
    key="skills"
    id="skills"
    href="#skills"
    className=" text-xl text-slate-200 justify-center py-4 lg:py-auto px-4 lg:px-auto w-full lg:w-auto  lg:hover:text-slate-50 flex items-center gap-2 tracking-wider  "
  >
    About
  </a>,
  <Link
    key="blogs"
    to="/blogs"
    className="btn btn-ghost normal-case w-full hover:text-blue-400"
  >
    Blogs
  </Link>,

  <Link
    key="blogCreation"
    to="/blogCreation"
    className="btn btn-ghost normal-case w-full hover:text-blue-400"
  >
    Create Blog
  </Link>,
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const hideTheNavSlider = () => {
    setIsOpen(false);
  };

  const showTheNavSlider = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className="sticky top-0 z-50">
        <div className="py-4 fixed w-full top-0 bg-base-100 ">
          <div className="relative container flex justify-between  mx-auto px-4 lg:px-8  w-full">
            <a
              href="/"
              className="btn btn-ghost normal-case text-3xl flex items-center  font-bold"
            >
              Anti Blog.
            </a>
            <div className="flex space-x-12 items-center">
              <div className="hidden lg:flex gap-8 sm:gap-12 items-center list-none">
                {links.map((link) => (
                  <li
                    key={link.key}
                    className=" text-xl z-10 hover:text-primary"
                  >
                    {link}
                  </li>
                ))}
              </div>
              {!isOpen ? (
                <div className="flex text-white justify-end ml-auto lg:hidden">
                  <label onClick={showTheNavSlider}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              ) : (
                <div className="flex justify-end ml-auto lg:hidden text-white">
                  <label onClick={hideTheNavSlider}>
                    <svg
                      className=" h-8 w-8 text-primary-content cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Slider
        links={links}
        isOpen={isOpen}
        hideTheNavSlider={hideTheNavSlider}
      />
    </div>
  );
}

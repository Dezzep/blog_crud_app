import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider.js';

const links = [
  <Link
    key="blogs"
    to="/blogs"
    className="btn btn-ghost normal-case w-full hover:text-blue-400 text-lg"
  >
    Blogs
  </Link>,

  <Link
    key="blogCreation"
    to="/blogCreation"
    className="btn btn-ghost normal-case w-full hover:text-blue-400 text-lg"
  >
    Create Blog
  </Link>,
];

export default function NavBar({ setTheme }) {
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
            <Link
              key="antiBlog"
              to="/"
              className="btn btn-ghost normal-case sm:text-3xl flex items-center  font-bold  hover:text-blue-400"
            >
              Anti Blog.
            </Link>

            <ul className="menu menu-horizontal px-1 ml-auto pr-6">
              <li tabIndex={0}>
                <div>
                  Theme
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </div>
                <ul className="p-2 bg-base-100 overflow-y-scroll max-h-64">
                  <li
                    onClick={() => {
                      setTheme('cupcake');
                      localStorage.setItem('theme', 'cupcake');
                    }}
                  >
                    <div>cupcake</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('night');
                      localStorage.setItem('theme', 'night');
                    }}
                  >
                    <div>night</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('winter');
                      localStorage.setItem('theme', 'winter');
                    }}
                  >
                    <div>winter</div>
                  </li>

                  <li
                    onClick={() => {
                      setTheme('emerald');
                      localStorage.setItem('theme', 'emerald');
                    }}
                  >
                    <div>emerald</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('synthwave');
                      localStorage.setItem('theme', 'synthwave');
                    }}
                  >
                    <div>synthwave</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('valentine');
                      localStorage.setItem('theme', 'valentine');
                    }}
                  >
                    <div>valentine</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('cyberpunk');
                      localStorage.setItem('theme', 'cyberpunk');
                    }}
                  >
                    <div>cyberpunk</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('halloween');
                      localStorage.setItem('theme', 'halloween');
                    }}
                  >
                    <div>halloween</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('forest');
                      localStorage.setItem('theme', 'forest');
                    }}
                  >
                    <div>forest</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('autumn');
                      localStorage.setItem('theme', 'autumn');
                    }}
                  >
                    <div>autumn</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('business');
                      localStorage.setItem('theme', 'business');
                    }}
                  >
                    <div>business</div>
                  </li>
                  <li
                    onClick={() => {
                      setTheme('dracula');
                      localStorage.setItem('theme', 'dracula');
                    }}
                  >
                    <div>dracula</div>
                  </li>
                </ul>
              </li>
            </ul>

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
                      className="inline-block w-8 h-8 stroke-current cursor-pointer text-accent"
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
                      className=" h-8 w-8 text-accent cursor-pointer"
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navigation = [
    { name: "خانه", href: "/", current: true },
    { name: "خدمات و سرویس ها", href:"plan-section", current: false },
    { name: "نمونه کارها", href: "expWorks", current: false },
    { name: "درباره ما", href: "aboutUS", current: false },
  ];

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [scrollyValue, setScrollyValue] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollyValue(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav>
      <div className="w-full flex justify-center">
        <div
          className={`${
            scrollyValue > 0 ? "-translate-y-72" : "translate-y-0"
          }  duration-500 w-full fixed p-3  flex flex-col bg-secondary_bg_color md:flex-row md:items-center justify-between z-10`}
        >

          <div className="flex items-center h-max justify-between">
            <img className="w-auto h-8" src="/logo.png" alt="لوگو" />
            <ul className="hidden md:flex mb-0 ml-auto">
              {navigation.map((navLink, index) => (
                <li key={index} className="mx-3">
                  <Link
                    to={navLink.href}
                    className="font-dana-regular no-underline text-secondary_txt"
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsClicked1(!isClicked1)}
              className="md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                color="white"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* mobile menu */}

          <div
            className={`${
              isClicked1 ? "h-max py-4" : "h-0 py-0 overflow-hidden"
            } bg-secondary_bg_color absolute w-full top-14 left-0 duration-300 ease-in-out md:hidden`}
          >
            <ul className="mb-0 flex flex-col items-start px-4">
              {navigation.map((navLink, index) => (
                <li key={index} className="py-2 font-dana-regular">
                  <Link
                    to={navLink.href}
                    className="font-dana-regular no-underline text-secondary_txt"
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button className="py-2 hidden md:inline-block bg-blue_color px-4 rounded-3xl">
            <Link
              to="https://t.me/soheil_feizi"
              className="no-underline font-dana-regular text-primary_bg_color"
            >
              درخواست پروژه
            </Link>
          </button>

        </div>

        {/* ------------------------------------ */}

        <div
          className={`${
            scrollyValue > 0 ? "translate-y-7" : "-translate-y-72"
          } duration-500 backdrop-blur-lg w-[90%] fixed p-3 rounded-3xl flex flex-col md:flex-row md:items-center justify-between z-40`}
        >
          <div className="flex items-center h-max justify-between">
            <img className="w-auto h-8" src="/logo.png" alt="لوگو" />
            <ul className="hidden md:flex mb-0 ml-auto">
              {navigation.map((navLink, index) => (
                <li key={index} className="mx-3">
                  <Link
                    to={navLink.href}
                    className="font-dana-regular no-underline text-secondary_txt"
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsClicked2(!isClicked2)}
              className="md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                color="white"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isClicked2 ? "h-max py-4" : "h-0 py-0 overflow-hidden"
            } backdrop-blur-md  w-full top-14 left-0 duration-300 ease-in-out md:hidden`}
          >
            <ul className="mb-0 flex flex-col items-start px-4">
              {navigation.map((navLink, index) => (
                <li key={index} className="py-2 font-dana-regular">
                  <Link
                    to={navLink.href}
                    className="font-dana-regular no-underline text-secondary_txt"
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button className="py-2 hidden md:inline-block bg-blue_color px-4 rounded-3xl">
            <Link
              to="#"
              className="no-underline font-dana-regular text-primary_bg_color"
            >
              درخواست پروژه
            </Link>
          </button>
          
        </div>
      </div>
    </nav>
  );
}

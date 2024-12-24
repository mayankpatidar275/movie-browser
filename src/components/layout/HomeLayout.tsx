import React, { useState, useEffect } from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import { navItems } from "../../constants/navItems";
import { NavLink } from "react-router-dom";
import Sun from "../Icons/Sun";
import Moon from "../Icons/Moon";

function HomeLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("mode", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.removeItem("mode");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-primary dark:bg-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="text-2xl font-bold text-gray-900 dark:text-primary flex gap-5 items-center">
                <span>MB</span>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-2">
                    {navItems.map((item, index) => {
                      return (
                        <NavLink
                          key={index}
                          to={item.href}
                          className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                        >
                          <span>{item.title}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <MobileMenuBtn setOpen={setOpen} open={open} />
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="hidden sm:flex absolute right-0 text-gray-900 dark:text-white px-3 py-2 rounded-full text-lg font-medium"
                >
                  {darkMode ? <Sun /> : <Moon />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile menu */}

        <div
          className={`${
            !open && "hidden"
          } flex flex-col absolute h-[100vh] w-[100vw] inset-y-0 bg-primary dark:bg-secondary`}
        >
          <div className="flex justify-between w-full h-16">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="text-2xl font-bold text-gray-900 dark:text-primary flex w-full justify-end px-4">
                <span>MB</span>
              </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-3 h-16">
              <MobileMenuBtn setOpen={setOpen} open={open} />
            </div>
          </div>
          <div className="sm:block sm:ml-6 h-full flex flex-col justify-between">
            <div className="flex flex-col">
              {navItems.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium"
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex absolute bottom-2 left-0 text-gray-900 dark:text-white px-3 py-2 rounded-full text-lg font-medium"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className=" bg-primary dark:bg-secondary">{children}</div>
    </>
  );
}

export default HomeLayout;

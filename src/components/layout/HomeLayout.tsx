import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../constants/navItems";
import Moon from "../Icons/Moon";
import Sun from "../Icons/Sun";
import MobileMenuBtn from "./MobileMenuBtn";

function HomeLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode ? storedMode === "dark" : true; // Default to dark mode
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (mode === "dark" || (!mode && darkMode)) {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("mode", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("mode", "light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <header>
        <nav
          className="bg-primary dark:bg-secondary shadow-md"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="text-2xl font-bold text-gray-900 dark:text-primary flex gap-5 items-center">
                  <span aria-label="Brand logo">MB</span>
                  <div className="hidden sm:block sm:ml-6">
                    <ul className="flex space-x-2">
                      {navItems.map((item, index) => (
                        <li key={index}>
                          <NavLink
                            to={item.href}
                            className="text-secondary dark:text-primary hover:bg-tertiary hover:text-primary px-3 py-2 rounded-md text-lg font-medium"
                            aria-label={`Navigate to ${item.title}`}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Theme Toggle and Mobile Menu */}
                <div className="flex justify-center items-center">
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <MobileMenuBtn
                      setOpen={setOpen}
                      open={open}
                      aria-label="Toggle mobile menu"
                    />
                  </div>
                  <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                    className="hidden sm:flex absolute right-0 text-gray-900 dark:text-white px-3 py-2 rounded-full text-lg font-medium"
                  >
                    {darkMode ? <Sun /> : <Moon />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div
              className="flex flex-col absolute h-[100vh] w-[100vw] inset-y-0 bg-primary dark:bg-secondary z-20"
              aria-expanded={open}
            >
              <div className="flex justify-between w-full h-16">
                <div className="text-2xl font-bold text-gray-900 dark:text-primary flex w-full justify-end px-4">
                  <span aria-label="Brand logo">MB</span>
                </div>
                <div className="px-4 sm:px-6 lg:px-8 py-3 h-16">
                  <MobileMenuBtn
                    setOpen={setOpen}
                    open={open}
                    aria-label="Close mobile menu"
                  />
                </div>
              </div>
              <div className="h-full flex flex-col justify-between">
                <ul className="flex flex-col">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium"
                        aria-label={`Navigate to ${item.title}`}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                {/* Dark mode toggle */}
                <button
                  onClick={() => setDarkMode((prev) => !prev)}
                  aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                  className="absolute bottom-2 left-0 text-gray-900 dark:text-white px-3 py-2 rounded-full text-lg font-medium"
                >
                  {darkMode ? <Sun /> : <Moon />}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="bg-primary dark:bg-secondary" role="main">
        {children}
      </main>
    </>
  );
}

export default HomeLayout;

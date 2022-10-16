import { List, Moon, Sun, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { configNavBarLinks } from "../configs";
import { Link as LinkScroll } from "react-scroll";

export function NavigationBar(this: any) {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (window.matchMedia("theme: dark").matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  console.log(theme);

  const changeBg: any = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div
      className={`fixed z-10 block w-full ${
        navbar
          ? "bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white"
          : ""
      } z-10 duration-300`}
    >
      <nav className="px-5 py-5 text-xl lg:flex lg:items-center lg:justify-between">
        <a href="/">
          <h1 className="text-xl font-bold uppercase lg:text-3xl">
            Smk Airlangga Balikpapan
            <span className="block text-base font-normal">
              Entrepreneur Spirit School
            </span>
          </h1>
        </a>

        <div className="absolute top-8 right-3 cursor-pointer lg:hidden">
          {open ? (
            <X size={32} weight="bold" onClick={() => setOpen(false)} />
          ) : (
            <List size={38} weight="bold" onClick={() => setOpen(true)} />
          )}
        </div>

        <ul
          className={`transtition-all absolute left-0 z-[1] mt-5 w-full pb-8 pl-12 duration-500 ease-in lg:static lg:left-0 lg:z-auto lg:mt-0 lg:flex lg:w-auto lg:items-center lg:pb-0 lg:pl-0 ${
            open
              ? "left-0 bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-300"
              : "left-[1000px]"
          }`}
        >
          {configNavBarLinks.map((navBarLinks) => {
            return (
              <LinkScroll
                to={navBarLinks.to}
                key={navBarLinks.text}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                <li className="hover:fs-bold mx-4 py-4 hover:text-slate-400 hover:duration-150 lg:py-0">
                  {navBarLinks.text}
                </li>
              </LinkScroll>
            );
          })}
          <li className="mx-4 pt-4 lg:mx-0 lg:pt-0">
            {theme ? (
              <Sun size={34} weight="fill" onClick={() => setTheme(false)} />
            ) : (
              <Moon
                size={34}
                weight="fill"
                onClick={() => setTheme(true)}
                className="text-gray-500"
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

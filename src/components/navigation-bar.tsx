import { List, X } from "phosphor-react";
import { useState } from "react";
import { configNavBarLinks } from "../configs";
import { Link } from "react-router-dom";

export function NavigationBar(this: any) {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBg: any = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div
      className={`fixed z-10 block w-full ${
        navbar ? "bg-slate-900" : ""
      } z-10 duration-500`}
    >
      <nav
        className={`px-10 py-5 text-xl lg:flex lg:items-center lg:justify-between`}
      >
        <a href="/">
          <h1 className="text-xl font-bold uppercase text-white lg:text-3xl">
            Smk Airlangga Balikpapan
            <span className="block text-base font-normal">
              Entrepreneur Spirit School
            </span>
          </h1>
        </a>

        <div className="absolute top-8 right-5 cursor-pointer lg:hidden">
          {open ? (
            <X size={32} weight="bold" onClick={() => setOpen(false)} />
          ) : (
            <List size={38} weight="bold" onClick={() => setOpen(true)} />
          )}
        </div>

        <ul
          className={`transtition-all absolute left-0 z-[1] w-full pb-8 pl-12 duration-500 ease-in lg:static lg:left-0 lg:z-auto lg:flex lg:w-auto lg:items-center lg:pb-0 lg:pl-0 ${
            open ? "left-0 bg-slate-900" : "left-[1000px]"
          }`}
        >
          {configNavBarLinks.map((navBarLinks) => {
            return (
              <Link to={`${navBarLinks.to}`} key={navBarLinks.text}>
                <li className="hover:fs-bold mx-4 py-4 hover:text-slate-400 hover:duration-150 lg:py-0">
                  {navBarLinks.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

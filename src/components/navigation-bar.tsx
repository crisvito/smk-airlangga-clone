import { configNavBarLinks } from "../configs";
import { LinkButton } from "../components";

import { Download } from "phosphor-react";
export function NavigationBar() {
  return (
    <nav className="flex justify-between px-10 py-5 text-xl">
      <div className="nav-item-first flex items-center gap-10">
        <h1 className="text-3xl font-bold uppercase text-white">frigg</h1>

        <ul className="nav-links">
          {configNavBarLinks.map((navBarLinks) => {
            return <li key={navBarLinks.text}>{navBarLinks.text}</li>;
          })}
        </ul>
      </div>

      <div className="nav-item-second flex items-center gap-10">
        <LinkButton to="/about" className="flex items-center gap-2">
          <Download size={20} weight="bold" />
          <span>Download</span>
        </LinkButton>
        <ul className="nav-links">
          <li>Login</li>
          <li>Join</li>
        </ul>
      </div>
    </nav>
  );
}

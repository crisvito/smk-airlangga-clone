import { configNavBarLinks } from "../configs";
import { LinkButton } from "../components";
export function NavigationBar() {
  return (
    <nav className="px-10 py-5 text-xl flex justify-between">
      <div className="nav-item-first flex gap-10 items-center">
        <h1 className="text-white font-bold text-3xl uppercase">frigg</h1>

        <ul className="nav-links">
          {configNavBarLinks.map((navBarLinks) => {
            return <li key={navBarLinks.text}>{navBarLinks.text}</li>;
          })}
        </ul>
      </div>

      <div className="nav-item-second flex gap-10 items-center">
        <LinkButton to="/about">Download</LinkButton>
        <ul className="nav-links">
          <li>Login</li>
          <li>Join</li>
        </ul>
      </div>
    </nav>
  );
}

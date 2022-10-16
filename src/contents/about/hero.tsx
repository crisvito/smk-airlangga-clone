import { Backpack, ThumbsUp, UsersThree } from "phosphor-react";
import { Link } from "react-router-dom";
import { dataabout } from "../../data/about";
import { Logo } from "../../components";
export function AboutHero() {
  const Logos = ["Backpack", "ThumbsUp", "UsersThree"];
  return (
    <div
      id="about"
      className=" h-screen bg-slate-400 text-slate-900 dark:bg-slate-700 dark:text-slate-200"
    >
      <div className="flex justify-center pt-10 pb-5">
        <h1 className="text-5xl">About Us</h1>
      </div>

      <div className="about-us mt-10 flex w-screen flex-wrap justify-center gap-10">
        {dataabout.map((about) => {
          return (
            <div className="about-content" key={about.id}>
              <div className="w-full">
                <Link to={"about/" + about.slug}>
                  <Logo key={about.logo} logo={about.logo} />
                  <h3>{about.name}</h3>
                </Link>
                <p>{about.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

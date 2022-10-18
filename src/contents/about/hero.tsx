import { Link } from "react-router-dom";
import { dataabout } from "../../data";
import { Logo } from "../../components";
export function AboutHero() {
  return (
    <div
      id="about"
      className=" h-auto bg-slate-400 text-slate-900 dark:bg-slate-700 dark:text-slate-200"
    >
      <h1 className="pt-7 text-center text-4xl font-black uppercase">
        About Us
      </h1>

      <div className="mt-5 flex flex-col items-center justify-center gap-10 pb-10 lg:flex lg:w-screen lg:flex-row lg:items-start">
        {dataabout.map((about) => {
          return (
            <div className="about-content" key={about.id}>
              <div className="w-full">
                <Link to={"about/" + about.slug}>
                  <span className="my-3 flex h-auto w-full justify-center text-center">
                    <Logo key={about.logo} logo={about.logo} />
                  </span>
                  <h3>{about.name}</h3>
                </Link>
                <p>{about.excerpt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

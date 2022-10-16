import { ArrowArcLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { getAbout } from "../data/about";

export function RouteAbout() {
  const params = useParams();
  const about = getAbout(params.slug as string);

  return (
    <div className="flex w-screen justify-center text-slate-900 dark:text-slate-200">
      <div className="mb-10 w-full bg-slate-300 shadow-2xl dark:bg-slate-800 lg:w-3/4">
        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            preventScrollReset={true}
            className="w-full px-5 text-xl lg:w-3/5 lg:px-0"
          >
            <ArrowArcLeft size={38} weight="fill" />
          </Link>
        </div>
        <div className="my-10 flex h-96 justify-center">
          <img
            src={about?.heroImgUrl + ".jpg"}
            alt={about?.name}
            className="h-full w-full px-5 lg:w-3/5 lg:px-0"
          />
        </div>
        <div className="my-10 flex h-auto justify-center">
          <p className="lg:px0 w-full px-5 lg:w-3/5">{about?.content}</p>
        </div>
      </div>
    </div>
  );
}

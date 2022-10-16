import { ArrowArcLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { getAbout } from "../data/about";

export function RouteAbout() {
  const params = useParams();
  const about = getAbout(params.slug as string);

  return (
    <div className="flex w-screen justify-center text-slate-900 dark:text-slate-200">
      <div className="my-10 w-3/4 shadow-2xl">
        <div className="mt-10 flex justify-center">
          <Link to="/" className="w-3/5 text-xl">
            <ArrowArcLeft size={38} weight="fill" />
          </Link>
        </div>
        <div className="my-10 flex h-96 justify-center">
          <img
            src={about?.heroImgUrl + ".jpg"}
            alt={about?.name}
            className="h-full w-3/5"
          />
        </div>
        <div className="my-10 flex h-auto justify-center">
          <p className="w-3/5">{about?.content}</p>
        </div>
      </div>
    </div>
  );
}

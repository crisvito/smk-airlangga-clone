import { ArrowArcLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { getAbout } from "../data";

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
            className="w-full px-5 lg:w-3/5 lg:px-0"
          >
            <ArrowArcLeft size={28} weight="fill" />
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
        <div className="flex flex-wrap justify-center gap-10 p-3">
          {about?.detail.map((detail) => {
            return (
              <div
                className="mb-5 flex w-3/4 flex-col lg:mb-10 lg:w-2/5"
                key={detail.id}
              >
                <img
                  src={detail.imgDetail + ".jpg"}
                  alt={detail.name}
                  className="h-48"
                />
                <h1 className="my-4 font-black uppercase">{detail.name}</h1>
                <p>{detail.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

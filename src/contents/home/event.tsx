import { dataevent } from "../../data";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function HomeEvent() {
  return (
    <div id="events" className="flex flex-wrap justify-center">
      {dataevent.map((devent) => {
        return (
          <Link
            to={`event/${devent.slug}`}
            className="group relative m-10 block w-1/4 overflow-hidden rounded-lg shadow-md duration-300 xl:h-52"
          >
            <div
              id="home"
              className="flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-3 duration-500 hover:bg-opacity-0 hover:uppercase"
            >
              <img
                src={devent.heroImgUrl + ".jpg"}
                alt={devent.name}
                className="absolute bottom-0 z-[-1] h-full"
              />
              <div className="absolut z-10">
                <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                  {devent.name}
                </h5>
                <p className="overflow-hidden text-base font-normal">
                  {devent.excerpt}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

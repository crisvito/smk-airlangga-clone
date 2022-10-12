import { dataevent } from "../../data";
import { Link } from "react-router-dom";

export function HomeEvent() {
  const base = import.meta.env.BASE_URL;
  return (
    <div id="event" className="flex flex-wrap justify-center">
      {dataevent.map((devent) => {
        return (
          <Link
            to={`${base}event/${devent.slug}`}
            className="relative m-10 block w-1/4 overflow-hidden rounded-lg shadow-md xl:h-52"
          >
            <div
              id="home"
              className="flex h-full w-full items-center justify-center bg-black bg-opacity-0 bg-opacity-50 p-3"
            >
              <img
                src={devent.heroImgUrl}
                alt={devent.name}
                className="absolute left-0 bottom-0 z-[-1]"
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

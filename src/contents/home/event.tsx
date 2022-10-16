import { dataevent } from "../../data";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../components";

export function HomeEvent() {
  const base = import.meta.env.BASE_URL;
  ScrollToTop();
  return (
    <div id="events">
      <h1 className="mt-20 text-center text-5xl font-black uppercase">Event</h1>

      <div className="flex flex-wrap justify-center">
        {dataevent.map((devent) => {
          return (
            <Link
              to={`${base}event/${devent.slug}`}
              className="group relative m-10 block h-52 w-screen overflow-hidden rounded-lg shadow-md duration-300 xl:h-96 xl:w-1/2"
              key={devent.slug}
            >
              <div
                id="home"
                className="flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-3 duration-500 hover:bg-opacity-30 hover:font-black hover:uppercase"
              >
                <img
                  src={devent.heroImgUrl + ".jpg"}
                  alt={devent.name}
                  className="absolute bottom-0 z-[-1] h-full w-full"
                />
                <div>
                  <h5 className="mb-2 text-4xl font-bold uppercase">
                    {devent.name}
                  </h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import { CaretDown } from "phosphor-react";
import { useParams } from "react-router-dom";
import { getEvent } from "../../data";
export function EventHero() {
  const params = useParams();
  const event = getEvent(params.slug as string);

  return (
    <div className="relative flex h-screen items-center justify-center">
      <img
        src={event?.heroImgUrl + ".jpg"}
        alt={event?.name}
        className="absolute z-[-10] h-screen w-screen"
      />
      <a href="#event" className="absolute bottom-0 cursor-pointer ">
        <CaretDown
          size={62}
          weight="bold"
          className="h-min duration-300 hover:w-20"
        />
      </a>
      <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-0 bg-opacity-50">
        <h1 className="font-brand-bold text-7xl uppercase leading-tight tracking-widest">
          {event?.name}
        </h1>
      </div>
    </div>
  );
}

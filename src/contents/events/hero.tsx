import { ArrowLeft, CaretDown } from "phosphor-react";
import { useParams } from "react-router-dom";
import { getEvent } from "../../data";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
export function EventHero() {
  const params = useParams();
  const event = getEvent(params.slug as string);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <img
        src={event?.heroImgUrl + ".jpg"}
        alt={event?.name}
        className="absolute z-[-10] h-screen w-screen"
      />

      <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-black bg-opacity-0 bg-opacity-50">
        <Link to="/">
          <ArrowLeft
            size={72}
            weight="bold"
            className="h-min duration-300 hover:-translate-x-6 hover:scale-x-150 hover:scale-y-125"
          />
        </Link>
        <h1 className="font-brand-bold text-7xl uppercase leading-tight tracking-widest">
          {event?.name}
        </h1>
      </div>

      <LinkScroll to="event" className="absolute bottom-0 cursor-pointer">
        <CaretDown
          size={62}
          weight="bold"
          className="h-min duration-300 hover:w-20"
        />
      </LinkScroll>
    </div>
  );
}

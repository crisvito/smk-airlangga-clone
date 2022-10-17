import { CaretDown } from "phosphor-react";
import { useParams } from "react-router-dom";
import { getEvent } from "../../data";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { ButtonHref } from "../../components";
export function EventHero() {
  const params = useParams();
  const event = getEvent(params.slug as string);

  return (
    <div className="min-w-screen relative flex h-screen items-center justify-center">
      <img
        src={event?.heroImgUrl + ".jpg"}
        alt={event?.name}
        className="absolute z-[-10] h-3/5 w-screen bg-local lg:h-screen"
      />

      <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-black bg-opacity-0 bg-opacity-50">
        <div className="flex w-1/2 flex-col items-center gap-5 lg:w-full">
          <ButtonHref children="Back Home" where="/" />
          <h1 className="font-brand-bold text-center text-3xl uppercase leading-tight tracking-widest lg:text-7xl">
            {event?.name}
          </h1>
        </div>
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

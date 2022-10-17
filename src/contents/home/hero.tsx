import { CaretDown } from "phosphor-react";
import { Link as LinkScroll } from "react-scroll";
import { ButtonScroll } from "../../components";

export function HomeHero() {
  return (
    <div
      id="home"
      className="bg-home-hero flex h-screen w-screen items-center justify-center  bg-black bg-opacity-0 bg-opacity-50"
    >
      <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-0 bg-opacity-50">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-brand-bold text-3xl uppercase leading-tight tracking-widest lg:text-6xl">
            Wellcome <br /> to <br /> Airlangga
          </h1>
          <ButtonScroll children="Know More" where="about" />
        </div>
        <LinkScroll to="events" className="absolute bottom-0 cursor-pointer ">
          <CaretDown
            size={62}
            weight="bold"
            className="h-min duration-300 hover:w-20"
          />
        </LinkScroll>
      </div>
    </div>
  );
}

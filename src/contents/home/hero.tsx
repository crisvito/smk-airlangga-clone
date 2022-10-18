import { CaretDown } from "phosphor-react";
import { Link as LinkScroll } from "react-scroll";
import { ButtonScroll, SlideShow } from "../../components";

export function HomeHero() {
  return (
    <div id="home" className="h-screen w-screen">
      <div className="flex justify-center">
        <SlideShow />
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

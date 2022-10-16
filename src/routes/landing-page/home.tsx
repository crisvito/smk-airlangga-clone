import { Footer, NavigationBar } from "../../components";
import { HomeHero, HomeEvent } from "../../contents";
import { RouteAbout } from "./about";

export function RouteHome() {
  return (
    <div className="flex-[1]">
      <NavigationBar />
      <HomeHero />
      <HomeEvent />
      <RouteAbout />
      <Footer />
    </div>
  );
}

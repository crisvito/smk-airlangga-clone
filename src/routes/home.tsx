import { Footer, NavigationBar } from "../components";
import { HomeHero, HomeEvent } from "../contents";
import { AboutHero } from "../contents";

export function RouteHome() {
  return (
    <div className="flex-[1]">
      <NavigationBar />
      <HomeHero />
      <HomeEvent />
      <AboutHero />
      <Footer />
    </div>
  );
}

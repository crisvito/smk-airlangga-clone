import { Footer, NavigationBar } from "../components";
import { HomeHero, HomeEvent } from "../contents";
import { AboutHero } from "../contents";
import { SupportHero } from "../contents/support";

export function RouteHome() {
  return (
    <div className="flex-[1]">
      <NavigationBar />
      <HomeHero />
      <HomeEvent />
      <AboutHero />
      <SupportHero />
      <Footer />
    </div>
  );
}

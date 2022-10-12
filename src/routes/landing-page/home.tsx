import { HomeHero, HomeEvent } from "../../contents";

export function RouteHome() {
  return (
    <main className="flex-[1]">
      <HomeHero />
      <HomeEvent />
    </main>
  );
}

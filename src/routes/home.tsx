import { HomeHero, HomeCategory } from "../contents";

export function RouteHome() {
  return (
    <main className="flex-[1]">
      <HomeHero />
      <HomeCategory />
    </main>
  );
}

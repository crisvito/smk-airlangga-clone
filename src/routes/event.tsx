import { EventDetail, EventHero } from "../contents";

export function RouteEvent() {
  return (
    <main className="flex-[1]">
      <EventHero />
      <EventDetail />
    </main>
  );
}

import { useParams } from "react-router-dom";
import { getEvent } from "../../data";

export function EventDetail() {
  const params = useParams();
  const event = getEvent(params.slug as string);

  return (
    <div id="event" className="flex h-screen items-center justify-center">
      <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-0 bg-opacity-50">
        <h1 className="font-brand-bold text-7xl uppercase leading-tight tracking-widest">
          {event?.name}
        </h1>
        <p>{event?.content}</p>
      </div>
    </div>
  );
}

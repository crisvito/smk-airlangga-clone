import { useParams } from "react-router-dom";
import { getEvent } from "../../data";

export function EventDetail() {
  const params = useParams();
  const event = getEvent(params.slug as string);

  return (
    <div id="event" className="flex h-auto items-center justify-center">
      <div className="h-full w-full flex-col items-center justify-center bg-black bg-opacity-0 bg-opacity-50">
        <h1 className="font-brand-bold mt-20 mb-10 text-center text-5xl uppercase leading-tight tracking-widest">
          {event?.name}
        </h1>

        <div className="m-3">
          {event?.content.split(".").map((paragraph: string) => {
            return (
              <p className="p-3" key={paragraph}>
                {paragraph}.
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

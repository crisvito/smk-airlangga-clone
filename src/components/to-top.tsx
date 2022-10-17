import { ArrowCircleUp } from "phosphor-react";
import { useState } from "react";

export function ToTop() {
  const [up, setUp] = useState(false);

  window.addEventListener("scroll", function () {
    window.scrollY >= 100 ? setUp(true) : setUp(false);
  });
  function handleUp() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="fixed bottom-5 right-5">
      <ArrowCircleUp
        size={54}
        weight="fill"
        className={`text-black dark:text-white ${up ? "" : "hidden"}`}
        onClick={() => handleUp()}
      />
    </div>
  );
}

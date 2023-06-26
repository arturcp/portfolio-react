/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Slides({ collapsibleId, conference }) {
  useEffect(() => {
    const element = document.querySelector(`[data-id="${conference.slides.deckId}"]`);

    if (element) return;

    const script = document.createElement("script");

    script.src = "//speakerdeck.com/assets/embed.js";
    script.classList.add("speakerdeck-embed");
    script.setAttribute("data-id", conference.slides.deckId);
    script.setAttribute("data-ratio", "1.77777777777778");
    script.async = true;

    const container = document.querySelector(`#${collapsibleId}-slides`)
    container.appendChild(script);
  }, []);

  return(
    <section>
      <div className="embeded-slides" id={`${collapsibleId}-slides`}></div>
    </section>
  );
}

import ReactDOM from "react-dom/client";
import { FullArticle } from "@yleisradio/arkki-web";

const render = () => {
  const container = document.getElementById("app");

  const stateContainer = document.getElementById("state");

  const articulado = JSON.parse(stateContainer.textContent);

  const root = ReactDOM.hydrateRoot(
    container,
    <FullArticle
      endpoint="aav2"
      data={articulado}
      disableSubjectInteraction
      showImages
      showPrimarySubject={false}
      showShareButtons={false}
      showSubjectList={false}
      showFullTimestamps
    />
  );
};

window.render = render;

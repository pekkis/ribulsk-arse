import ReactDOM from "react-dom/client";
import App from "./App";

const hydratore = () => {
  const container = document.getElementById("app");

  console.log("CONTAINER", container);

  const stateContainer = document.getElementById("state");
  const articulado = JSON.parse(stateContainer.textContent);

  ReactDOM.hydrateRoot(container, <App articulado={articulado} />);
};

const hydrado = document.getElementById("hydrado");
hydrado.addEventListener("click", () => {
  hydratore();
});

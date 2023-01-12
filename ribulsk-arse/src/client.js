import ReactDOM from "react-dom/client";
import App from "./App";

console.log("haha");

const hydratore = () => {
  const container = document.getElementById("app");

  console.log("CONTAINER", container);

  const stateContainer = document.getElementById("state");
  const articulado = JSON.parse(stateContainer.textContent);

  ReactDOM.hydrateRoot(container, <App articulado={articulado} />);
};

const rendatore = () => {
  const container = document.getElementById("app2");
  const stateContainer = document.getElementById("state");
  const articulado = JSON.parse(stateContainer.textContent);

  const root = ReactDOM.createRoot(container);
  root.render(<App articulado={articulado} />);
};

const hydrado = document.getElementById("hydrado");
hydrado.addEventListener("click", () => {
  console.log("hi hi");
  hydratore();
});

const renderado = document.getElementById("renderado");
renderado.addEventListener("click", () => {
  rendatore();
});

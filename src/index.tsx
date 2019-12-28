// styles:
import "materialize-css/dist/css/materialize.min.css";

import { render } from "solid-js/dom";
import { Counter, Header } from "./components";
import { AppContextProvider } from "./lib/context/app-context";

const Index = () => {
  return (
    <AppContextProvider>
      <Header></Header>
      <Counter></Counter>
    </AppContextProvider>
  );
};

render(Index, document.getElementById("root") as Element);

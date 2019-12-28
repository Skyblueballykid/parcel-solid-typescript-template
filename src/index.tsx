import { render } from "solid-js/dom";
import { Counter } from "./components";
import { AppProvider } from "./lib/context/app-context";

const Index = () => {
  return (
    <div>
      <AppProvider>
        <Counter></Counter>
      </AppProvider>
    </div>
  );
};

render(Index, document.getElementById("root") as Element);

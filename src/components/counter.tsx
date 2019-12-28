import { createState } from "solid-js";
import { getAppContext } from "../lib/context/app-context";

const Counter = () => {
  const [state, setState] = createState({ count: 0 });
  const [appState, {setCount}] = getAppContext();

  return (
    <div>
      <p>Current local count: {state.count}</p>
      <button onClick={() => setState("count", ++state.count)}>👍</button>
      <button onClick={() => setState("count", --state.count)}>👎</button>

      <p>Current global count: {appState.count}</p>
      <button onClick={() => setCount(++appState.count)}>👍</button>
      <button onClick={() => setCount(--appState.count)}>👎</button>
    </div>
  );
};
export default Counter;

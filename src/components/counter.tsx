import "./counter.scss";
import { createState } from "solid-js";
import { getAppContext } from "../lib/context/app-context";

const Counter = () => {
  const [state, setState] = createState({ count: 0 });
  const [appState, { setCount }] = getAppContext();

  return (
    <div class="counter">
      <p>
        Working local state count:
        <span class="counter__state">{state.count}</span>
      </p>
      <button
        class="counter__action btn"
        onClick={() => setState("count", ++state.count)}
      >
        👍
      </button>
      <button
        class="counter__action btn"
        onClick={() => setState("count", --state.count)}
      >
        👎
      </button>

      <p>
        Working global state(context) count:
        <span class="counter__state">{appState.count}</span>
      </p>
      <button
        class="counter__action btn"
        onClick={() => setCount(++appState.count)}
      >
        👍
      </button>
      <button
        class="counter__action btn"
        onClick={() => setCount(--appState.count)}
      >
        👎
      </button>
    </div>
  );
};
export default Counter;

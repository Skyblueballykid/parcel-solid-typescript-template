import { createContext, createState, useContext } from "solid-js";
import { Wrapped } from "solid-js/types/state";
import AppState from "./app-state";

export type AppContext = [
  Wrapped<AppState>,
  {
    setCount: (count: number) => void;
  }
];

const getInitialAppState = (): AppState => {
  let state: AppState | null = null;
  //TODO: Load state from backend, cookies or localstorage
  return state || new AppState();
};

const Context = createContext<AppContext>();
export function AppContextProvider(props: any) {
  const [state, setState] = createState<AppState>(getInitialAppState());
  const store: AppContext = [
    state,
    {
      setCount: (count: number) => setState("count", count)
    }
  ];

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
}

export const getAppContext = (): AppContext => useContext<AppContext>(Context);

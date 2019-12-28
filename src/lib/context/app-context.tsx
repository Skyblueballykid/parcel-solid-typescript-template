import { createContext, createState, useContext } from "solid-js";
import { Wrapped } from "solid-js/types/state";
import AppState from "./app-state";

export type AppContext = [
  Wrapped<AppState>,
  {
    setCount: (count: number) => void;
  }
];

const context = createContext<AppContext>();

const getInitialAppState = (): AppState => {
  let state: AppState | null = null;
  //TODO: Load state from backend, cookies or localstorage
  return state || new AppState();
};

export function AppContextProvider(props: any) {
  const [state, setState] = createState<AppState>(getInitialAppState());
  const store: AppContext = [
    state,
    {
      setCount: (count: number) => setState("count", count)
    }
  ];

  return <context.Provider value={store}>{props.children}</context.Provider>;
}

export const getAppContext = (): AppContext => useContext<AppContext>(context);

import React, { createContext, useState } from "react";

export const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [appState, setAppState] = useState({
    isMenuOpen: false,
    theme: "light"
  });
  const changeAppState = (newState) =>
    setAppState({ ...appState, ...newState });

  return (
    <AppStateContext.Provider value={{ appState, changeAppState }}>
      {children}
    </AppStateContext.Provider>
  );
}

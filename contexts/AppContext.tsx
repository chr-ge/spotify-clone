import React, { ReactNode, useState, createContext, useContext } from "react";

const initialState = {
  songId: '',
  setSongId: (id: string) => {},
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [songId, setSongId] = useState<string>('');

  return (
    <AppContext.Provider
      value={{ songId, setSongId: (id: string) => setSongId(id) }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

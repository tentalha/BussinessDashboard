import { createContext, useState } from "react";


export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toogleMode = () => setDarkMode(!darkMode)

  return (
    <DarkModeContext.Provider value={{ darkMode, toogleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";
import Proptypes from "prop-types";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw Error("useAppContext must be used in AppContextProvider");
  }

  return context;
};

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: Proptypes.node.isRequired,
};

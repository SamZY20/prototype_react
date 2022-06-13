//Imports
import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { data } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("a");
  const [units, setUnits] = useState([]);

  const fetchData = () => {
    const unitList = data.map((unit) => {
      const {
        unitID,
        name,
        bedroom,
        bathroom,
        size,
        parkingSlot,
        status,
        price,
        url,
      } = unit;
      return {
        unitID,
        name,
        bedroom,
        bathroom,
        size,
        parkingSlot,
        status,
        price,
        url,
      };
    });
    setUnits(unitList);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [setKeyword]);
  return (
    <AppContext.Provider value={{ loading, setKeyword, units }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

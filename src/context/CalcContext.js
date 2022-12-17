import { createContext, useState } from "react";

// 1- create context
export const CalcContext = createContext();

// 2- create providerValue
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = {
    calc,
    setCalc,
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;

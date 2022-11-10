import { createContext, useState } from "react";

export const ValuesContext = createContext();

export function ValuesProvider({ children }) {
  const [bmrState, setBmrState] = useState(null);
  const [tdeeState, setTdeeState] = useState(null);

  const values = { bmrState, setBmrState, tdeeState, setTdeeState };

  return (
    <div>
      <ValuesContext.Provider value={values}>{children}</ValuesContext.Provider>
    </div>
  );
}

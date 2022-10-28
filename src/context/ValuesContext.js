import { createContext, useState } from "react";

export const ValuesContext = createContext();

export function ValuesProvider({ children }) {
  const [bmrState, setBmrState] = useState(null);

  const values = { bmrState, setBmrState };

  return (
    <div>
      <ValuesContext.Provider value={values}>{children}</ValuesContext.Provider>
    </div>
  );
}

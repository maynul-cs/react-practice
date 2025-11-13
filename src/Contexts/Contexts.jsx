import { createContext, useState } from "react";

export const Context1 = createContext();


export const Context1Provider = ({children}) => {
    const [a, setA] = useState("Hello Bangladesh");

    
  return (
    <Context1.Provider value={[a, setA]}>
        {children}
    </Context1.Provider>
  )
}


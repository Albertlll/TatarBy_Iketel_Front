
import { createContext, useState, useMemo } from "react";


export const MenuContext = createContext();


function ContextProviderMenu({children}) {
  const [IsMenuActive, SetMenuActive] = useState(false);
  const contextValue = useMemo(() => ({ IsMenuActive, SetMenuActive }), [IsMenuActive]);
  
  return (<MenuContext.Provider value={contextValue}>
            {children}
          </MenuContext.Provider>);
}

export default ContextProviderMenu;
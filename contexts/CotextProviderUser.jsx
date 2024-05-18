
import { createContext, useState, useMemo } from "react";


export const UserContext = createContext();


function ContextProviderUser({children}) {
    const [user, setUser] = useState(null);
    const contextValue = useMemo(() => ({ user, setUser }), [user]);
  
    return (<UserContext.Provider value={contextValue}>
                {children}
            </UserContext.Provider>);
}

export default ContextProviderUser;
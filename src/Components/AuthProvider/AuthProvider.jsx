import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // email & password auth..
    const createUser = (auth) =>{
        
    }

    const authInfo = {
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
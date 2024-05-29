import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadig, setLoading] = useState(true);

    // Create user mechanism
    const CreateUser = (email, password) => {
        // toTry: We can comment the setLoading for check.
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login/SignIn mechanism
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // LogOut mechanism:
    const logOut = () => {
        setLoading(true);
        return (auth, signOut);
    };

    // Return all:
    const authInfo = {
        user,
        loadig,
        CreateUser,
        login,
        logOut,
    };

    // Return AuthContext
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
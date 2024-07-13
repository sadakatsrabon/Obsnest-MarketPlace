import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user mechanism
    const createUser = (email, password) => {
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
        return auth.signOut();
    };

    // Listening auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => unSubscribe();
    }, [])
    // Return all:
    const authInfo = {
        user,
        loading,
        createUser,
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
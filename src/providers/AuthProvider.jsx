import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Google Login Method

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            // .then((result) => {
            //     const firebaseToken = GoogleAuthProvider.credentialFromResult(result);
            //     const token = firebaseToken.accessToken;
            //     const user = result.user;
            //     // return signInWithPopup(auth, googleProvider)
            // }).catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     const email = error.customData.email;
            //     const credential = GoogleAuthProvider.credentialFromError(error);
            // })
    }

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
        googleSignIn
    };

    // Return AuthContext
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from "../../firebase/firebase.config";

const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, creatUser => {
            console.log('user in the auth state changed', creatUser);
            setUser(creatUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
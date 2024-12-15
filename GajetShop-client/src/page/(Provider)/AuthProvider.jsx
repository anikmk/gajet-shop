import { createContext, useEffect, useState } from "react"
import { 
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut, } from "firebase/auth";

import { app } from "../../firebase-config/firebase";
import useAxios from "../(hook)/useAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const axiosInstance = useAxios();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const google = new GoogleAuthProvider();
    const signinUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signinWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth,google)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };



    useEffect(() => {
      const unSubscrive = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser || null); // Ensure null when logged out
        if(currentUser){
          axiosInstance.post('/jsonwebtoken',{email:currentUser.email})
         .then((data) => {
          localStorage.setItem("access_token",data?.data?.token);
          setLoading(false)
         })
        }
        else{
          localStorage.removeItem("access_token")
          setLoading(false)
        }

      })
    
      return () => {
        unSubscrive()
      }
    }, [])

    const authInfo = {
        user,
        signinUser,
        loginUser,
        logOut,
        signinWithGoogle,
        loading
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
 
}

export default AuthProvider
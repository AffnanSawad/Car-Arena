import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth/cordova";




export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null)
    const [loading,setloading] = useState(true)



    const createUser = (email,password) => {
        
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

   const signin = (email,password)=> {
    setloading(true);

    return signInWithEmailAndPassword(auth,email,password);
   }


   const logout = () => {
    
    setloading(true)
    return signOut(auth);
   }




    //ONAUTH STATE CHANGED
    useEffect(  ()=> {


        const unsubscibe = onAuthStateChanged(auth , currentuser => {
            setuser(currentuser);

            console.log('current user', currentuser)

            setloading(false);
        });

        return()=> {
            return unsubscibe();
        }

    }  

        ,[])


    const authInfo = {
       
        loading,
        user,
        createUser,
        signin,
        logout,
    }


    return (
        
        
        <AuthContext.Provider value={authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;
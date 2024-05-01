import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
    }


    return (
        
        
        <AuthContext.Provider value={authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { getAuth,createUserWithEmailAndPassword } from '@firebase/auth';
import React, { createContext } from 'react';
import { app } from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth =  getAuth(app)


const UseContext = () => {


    // create user
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
      
    }

    const userInfo = {
        createUser,
    }

    return (
       <AuthContext.Provider value={userInfo}></AuthContext.Provider>
    );
};

export default UseContext;
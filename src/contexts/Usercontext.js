import React, { createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const Authcontext = createContext()
const auth = getAuth(app);

const Usercontext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }

    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();

    }, [])


    const authInfo = {user,loading, createUser, signIn, logout};

    return (
        <Authcontext.Provider value={authInfo} >
            {children}
        </Authcontext.Provider>
    );
};

export default Usercontext;
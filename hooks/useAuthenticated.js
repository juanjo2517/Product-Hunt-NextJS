import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function useAuthenticated() {
    const [userAuthenticated, saveUserAuthenticated] = useState(null);

    useEffect(() => {
        const unSuscribe = firebase.auth.onAuthStateChanged(user => {
            if(user){
                saveUserAuthenticated(user);
            }else{
                saveUserAuthenticated(null);
            }
        });
        
        return () => unSuscribe();
    }, []);

    return userAuthenticated;
}

export default useAuthenticated; 

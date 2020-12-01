import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config';
import FirebaseContext from './context';

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
    }

    //registro 
    async register(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
        
        return await newUser.user.updateProfile({
            displayName: name
        });
    
    }

    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    async logout(){
        console.log('Cerrando...')
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;
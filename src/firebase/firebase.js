// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


//console.log(process.env.REACT_APP_PROJECT_ID, " tytyryty");

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey ,
    authDomain: process.env.REACT_APP_authDomain ,
    projectId: process.env.REACT_APP_projectId ,
    storageBucket: process.env.REACT_APP_storageBucket ,
    messagingSenderId: process.env.REACT_APP_messagingSenderId ,
    appId: process.env.REACT_APP_appId ,
    measurementId: process.env.REACT_APP_measurementId
};





const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function registerNewUser(email, password){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}


export function signIn(email, password, setLoggedUser){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("zalogowano poprawnie w firebase");
            setLoggedUser(user.email);



            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("nieudana próba zalogowania", errorCode, errorMessage)
        });
}


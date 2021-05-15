import app from "firebase/app";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyDFdmz3_D7XV4zOZ8CklLBHVu1RJFn4aNo",
    authDomain: "appwithfirebase-b1cab.firebaseapp.com",
    projectId: "appwithfirebase-b1cab",
    storageBucket: "appwithfirebase-b1cab.appspot.com",
    messagingSenderId: "402010614500",
    appId: "1:402010614500:web:d65a3397b7fd31caf39af1"
}
// {
//     apiKey: process.env.REACT_APP_API_KEY,
//         authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId:process.env.REACT_APP_ID
// }


class Firebase{
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
//    APP AUTH
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

}
export default Firebase;
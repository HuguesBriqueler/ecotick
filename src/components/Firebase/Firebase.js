import app from 'firebase/app';
import 'firebase/auth';

const config = {

  apiKey: "AIzaSyBW6yP4Q2tiX-6KwuU9qe9u5RCpmdGlBDU",
  authDomain: "ecotick-29526.firebaseapp.com",
  projectId: "ecotick-29526",
  storageBucket: "ecotick-29526.appspot.com",
  messagingSenderId: "291528898510",
  appId: "1:291528898510:web:86d094dbbb422e172fdd9f",
  measurementId: "G-K974E0ZYG4"

};



class Firebase {
  constructor(){
    app.initializeApp(config);
    this.auth = app.auth();
  }

  //inscription method
  signupUser = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password)
  }

  //connexion method
  loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password)
  }

  //deconnexion method
  signOutUser = () => {
    this.auth.signOut()
  }

}

export default Firebase;
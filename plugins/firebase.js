import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAcwDLKTK_f-LCtgmW26kUf_wVbjaHg79Q",
        authDomain: "clubdeportivotfg.firebaseapp.com",
        projectId: "clubdeportivotfg",
        storageBucket: "clubdeportivotfg.appspot.com",
        messagingSenderId: "354008082382",
        appId: "1:354008082382:web:af17be67ecac83a0d66d9f"
      }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db }
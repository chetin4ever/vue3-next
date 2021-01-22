import firebase from "firebase/app"
import "firebase/auth"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBpSL3_rbbvE4l5oxfOUhDL4emCEw6DAy0",
  authDomain: "vue-3-complete.firebaseapp.com",
  projectId: "vue-3-complete",
  storageBucket: "vue-3-complete.appspot.com",
  messagingSenderId: "145885369600",
  appId: "1:145885369600:web:0b74197837d8d8b25e8fe5",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase

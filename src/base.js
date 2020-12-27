import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgdyNSDDhXpKpN5PMHwaNea8YNd5isYE8",
    authDomain: "chat-box-app-d6ec1.firebaseapp.com",
    databaseURL: "https://chat-box-app-d6ec1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-box-app-d6ec1",
    storageBucket: "chat-box-app-d6ec1.appspot.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
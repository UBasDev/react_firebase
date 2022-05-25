import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCbd_57vd8UOaxfvkscPK_sI9lY2ZGgi0I",
    authDomain: "products-69345.firebaseapp.com",
    projectId: "products-69345",
    storageBucket: "products-69345.appspot.com",
    messagingSenderId: "231413254900",
    appId: "1:231413254900:web:ba407a0c5cd4c1a8b3aca1",
    measurementId: "G-T6H65Z7FQ6"
  }

const app = initializeApp(firebaseConfig)
getAnalytics(app)
const auth = getAuth(app)

export const signUp = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    await updateCurrentUser(auth,{displayName:name})
}

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}
import { useEffect } from "react"
import { signUp, signIn } from "./config/firebase"

const App = () => {
  useEffect(()=>{
    signIn("joe@email.com", "1234567").then(()=>{
      console.log('Done!')
    }).catch((error)=>{
      console.log(error)
    })
    
    // signUp("Joe", "joe@email.com", "1234567").then(()=>{
    //   console.log("Done!")
    // }).catch((error)=>{
    //   console.log(error)
    // })
  }, [])

  return <h1>Hİ, App</h1>
}
export default App
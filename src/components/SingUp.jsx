import Form from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from "store/slices/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SingUp = () => {

  
  const dispatch = useDispatch()

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  }  


  return(
    <Form 
      title='register'
      handleClick={handleRegister}
    />
  )
} 

export {SingUp}
import { Navigate } from "react-router-dom"
import {useAuth} from '../hooks/use-auth'
import { useDispatch } from "react-redux";
import {removeUser} from '../store/slices/userSlice'

const HomePage = () => {
  const dispatch = useDispatch();

  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <h1>здравствуйте</h1>

      <button onClick={() => dispatch(removeUser())}
      >выйти как пользователь: {email}
      </button>
    </div>
  ) : (
    <div>
      <h1>home</h1>
    <Navigate to='/login'/>
    </div>
  )
}

export { HomePage }
import { Login } from "../components/Login"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div>
      <h3>войти</h3>
      <Login />
      <p>
        или <Link to='/register'>зарегестрироваться</Link>
      </p>
    </div>
  )
}

export {LoginPage}
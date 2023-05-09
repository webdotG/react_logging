import { SingUp } from "../components/SingUp"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div>
      <h3>зарегестрироваться</h3>
      <SingUp />
      <p>
        если у Вас есть аккаунт то <Link to='/login'>ввести логин и пароль</Link>
      </p>
    </div>
  )
}

export {RegisterPage}
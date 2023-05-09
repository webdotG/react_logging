//хук позволит вызывать его в приложении где угодно
  //и будет давать информацию про то авторизован пользователь или нет
  //и если авторизован то какие авторизационные данные у него есть 

import { useSelector } from "react-redux";  

function useAuth () {
  const {email, token, id} = useSelector(state => state.user)

  return {
    isAuth: !!id,
    email,
    token,
    id,
  }
}
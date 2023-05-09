import { Navigate } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>home</h1>
    <Navigate to='/login'/>
    </div>
  )
}

export { HomePage }
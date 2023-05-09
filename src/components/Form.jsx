import { useState } from "react";

const Form = ({title, handleClick}) =>{
  const [email, setEmail] =useState('')
  const [pass, setPass] =useState('')

  return(
    <div>
      <input
        type="email"
        value={email}
        onChange={(evt) => setEmail.evt.target.value}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(evt) => setPass.evt.target.value}
        placeholder="password"  
      />  
      <button
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </button>  
    </div>
  )
}

export default Form
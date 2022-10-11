import React, { useEffect, useState } from 'react'

const SignUpPage = () => {
  const [disabled, setDisabled] = useState(true)
  const [password, setPassword] = useState("")
  const [passwordRepeat, setPasswordRepeat] = useState("")

  const onChangePassword = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = target.value

    setPassword(currentValue)
    setDisabled(currentValue !== passwordRepeat)
  }

  const onChangePasswordRepeat = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = target.value

    setPasswordRepeat(currentValue)
    setDisabled(currentValue !== password)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' placeholder='email'/>

        <label htmlFor="username">Username</label>
        <input type="text" name='username' id='username' placeholder='username'/>
        
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='password' value={password} onChange={onChangePassword}/>

        <label htmlFor="password-repeat">Password Repeat</label>
        <input type="password" name='password-repeat' id='password-repeat' placeholder='password-repeat' value={passwordRepeat} onChange={onChangePasswordRepeat}/>

        <button disabled={disabled}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpPage
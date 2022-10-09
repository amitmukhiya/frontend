import React from 'react'
import './login.css'
const Login = () => {
  return (
    <>
        <div className="login">
            <h1>LOGIN</h1>
            <div className="details">
                <form className='form'  action="">
                    <label htmlFor="">User Name</label>
                    <br />
                    <input type="text" /><br />
                    <label htmlFor="">Password</label><br />
                    <input type="text" />
                    <input className='sub' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
  )
}

export default Login
import { useEffect, useState } from 'react'
import './login.css'
import { login, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

const Login = () => {
  const [formData, setFromData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  )

  const redirect = user && user.isAdmin ? '/admin' : ''
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate(`/${user._id}${redirect}`)
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, redirect, dispatch, navigate])

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className='login'>
        <h1>LOGIN</h1>
        <div className='details'>
          <form className='form' onSubmit={onSubmit}>
            <label>Email</label>
            <br />
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              placeholder='Enter your Email'
              onChange={onChange}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
            <input className='sub' type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

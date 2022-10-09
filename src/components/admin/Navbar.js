import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    navigate('/')
    dispatch(logout())
    dispatch(reset())
  }
  useEffect(() => {
    if (!user) navigate('/')
  }, [user])
  return (
    <>
      <div className=''>
        <nav className='navbar navbar-expand-lg bg-light '>
          <div className='container-fluid'>
            <a className='navbar-brand'>Add User</a>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle '
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {user && user.name}
                  </a>
                  <ul className='dropdown-menu'>
                    {/* <li>
                      <a className='dropdown-item'>Profile</a>
                    </li> */}
                    <li>
                      <a className='btn' onClick={onLogout}>
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

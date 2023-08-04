import React, { useEffect } from 'react'
import { signinRedirect } from '../services/userService'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Login() {
  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    signinRedirect();
  }, []);

  return (
    (user) ? (<Redirect to={'/'} />) : ""
  )
}

export default Login

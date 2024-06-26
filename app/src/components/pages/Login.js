
import { useAuth0 } from '@auth0/auth0-react';

import React from 'react'

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>
           Sign In
    </button>
    )
    
  )
}

export default Login

import React from 'react'
import SignUp from './SignUp';
import SignUpWith from './SignUpWith';

const LoginPage = () => {
  return (
    <div className='flex'>
        <SignUpWith />
        <SignUp />
    </div>
  )
}

export default LoginPage;
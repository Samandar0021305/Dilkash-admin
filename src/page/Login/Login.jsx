import React from 'react'
import {actions} from '../../utils/actions'

const Login = React.memo(() => {
    const _page = 'login'
    const {post} = actions(_page)
  
   
  return (
    <div>Login</div>
  )
})

export default Login
import React from 'react'

const Login = () => {
  return (
    <div>
     <h2>Login</h2>

     <form>
      <input type='text'placeholder='Enter Email'></input>
       <input type='text'placeholder='Enter Password'></input>

       <button> <a href='/Dashboard'>Login</a></button>
       <p className='text-danger'>Don't have an account?<a href='/Register'>Register</a> </p>
     </form>
    </div>
  )
}

export default Login
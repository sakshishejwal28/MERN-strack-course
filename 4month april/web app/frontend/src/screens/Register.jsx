import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Register</h2>

      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />

      <button>Register</button>

      
      <p className="text-danger">
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  )
}

export default Register
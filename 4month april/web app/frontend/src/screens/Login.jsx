import { useState } from 'react';
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Login = () => {
  const [email, setEmail] = useState("")
  const [ password , setPassword] = useState("")

  const handleLoginSubmit = async () => {

  }


  return (
    <div className="m-5">

      <Card className="text-center">
        <Card.Body>
          <Card.Title>Login</Card.Title>

          <form>
            <input type="text" placeholder="Enter Email" />

            <br />
            <br />
            <input type="text" placeholder="Enter Password" />
            <br />
            <br />
            <button className="btn btn-success">
              <a href="/dashboard" className="text-white">Login</a>
            </button>
            <br />
            <br />
            <p className="text-danger">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </form>

           
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
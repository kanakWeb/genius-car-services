import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Register = () => {

    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
  
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(name,email, password);
    };
  
    const navigatelogin = () => {
      navigate('/login')
    };

    return (
        <div className="w-50 mx-auto mt-2 shadow-lg border border-warning p-3 rounded">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center text-primary">
           Regiester
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="email"
              placeholder="Enter your name"
              required
            />

            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            New to genius car?
            <Link to='/login' onClick={navigatelogin} className="text-primary">
              Please  Login 
            </Link>
          </p>
        </Form>
      </div>
    );
};

export default Register;
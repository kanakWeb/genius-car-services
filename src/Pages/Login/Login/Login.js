import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");

  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegiester = () => {
    navigate("/regiester");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    alert("sent email");
  };

  let errorelement;
  if (error) {
    errorelement = (
      <p className="text-info bg-danger  text-center p-1 rounded">
        Error: {error?.message}
      </p>
    );
  }

  return (
    <div className="w-50 mx-auto mt-4 shadow-lg border border-warning p-3 rounded-3">
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center text-primary">
          Login Information
        </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="w-50 mx-auto d-block mb-3"
          variant="primary"
          type="submit"
        >
          Log In
        </Button>
        <div>{errorelement}</div>
        <p>
          New to genius car?
          <Link
            to="/regiester"
            onClick={navigateRegiester}
            className="text-primary text-decoration-none"
          >
            Please Regiester
          </Link>
        </p>

        <p>
          Forget Password?
          <Link
            to="/regiester"
            onClick={resetPassword}
            className="text-primary text-decoration-none"
          >
            Reset Password
          </Link>
        </p>

        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Login;

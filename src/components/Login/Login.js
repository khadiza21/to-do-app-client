import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
  } from "react-firebase-hooks/auth";
import SocialLogin from './SocialLogin';
import Loading from './Loading';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
    let errorElement;
  
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
  
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
    if (loading || sending) {
      return <Loading></Loading>;
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
  
      signInWithEmailAndPassword(email, password);
    };
  
    const navigateRegister = (event) => {
      navigate("/register");
    };
  
    if (user) {
      navigate(from, { replace: true });
    }
  
    const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
        toast("Sent email");
      } else {
        toast("Please enter your email address! ");
      }
    };
  
    if (error) {
      errorElement = <p className="text-danger"> Error: {error?.message} </p>;
    }
    return (
<div className="container w-50 mx-auto my-5 py-5">
      <h3 className="text-primary text-center mt-2">Please LogIn</h3>
      <Form onSubmit={handleSubmit} className="mt-5 pt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
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

        <Button
          className="d-block mx-auto w-50"
          variant="primary"
          type="submit"
        >
          LogIn
        </Button>
      </Form>
      <p className="my-2">
        New to Tralve BK?{" "}
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-decoration-none text-danger pe-auto"
        >
          Please Register
        </Link>{" "}
      </p>
      <p className="my-2">
        Forget Passsword?{" "}
        <button
          onClick={resetPassword}
          className=" btn btn-link text-decoration-none text-danger pe-auto"
        >
          Reset Passsword
        </button>{" "}
      </p>
      {errorElement}
      <SocialLogin></SocialLogin>
     
    </div>
    );
};

export default Login;
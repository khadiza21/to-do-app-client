import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
    const navigate = useNavigate();
  
    let errorElement;
  
    if (loading ) {
      return <Loading></Loading>;
    }
  
    if (error ) {
      errorElement = (
        <p className="text-danger">
          Error: {error?.message} 
        </p>
      );
    }
  
    if (user ) {
      navigate("/home");
    }
    return (
        <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-2 px-2 ">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>
        {errorElement}
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary w-50 d-block mx-auto my-2"
          >
            Google Sign In
          </button>
        </div>

      </div>

      
    );
};

export default SocialLogin;
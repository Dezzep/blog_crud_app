import { useState } from 'react';
import SignUpForm from './forms/SignUpForm';
import LoginForm from './forms/LoginForm';
const Login = ({ setUserCredentials }) => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="flex justify-center bg-base-300 p-12">
      {signUp ? (
        <SignUpForm
          signUp={signUp}
          setSignUp={setSignUp}
          setUserCredentials={setUserCredentials}
        />
      ) : (
        <LoginForm
          signUp={signUp}
          setSignUp={setSignUp}
          setUserCredentials={setUserCredentials}
        />
      )}
    </div>
  );
};

export default Login;

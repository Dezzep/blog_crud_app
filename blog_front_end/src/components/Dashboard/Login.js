import { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
const Login = ({ setUserCredentials }) => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="flex justify-center bg-base-300 p-12">
      {signUp ? (
        <SignUpForm signUp={signUp} setSignUp={setSignUp} />
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

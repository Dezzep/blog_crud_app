import { useState } from 'react';
import SignUpToggle from './SignUpToggle';
// import userLogin from '../../../requests/userLogin';
import {userLogin} from '../../../requests/frontEndTesting';

const LoginForm = ({ signUp, setSignUp, setUserCredentials }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [userBorderState, setUserBorderState] = useState('input-primary');
  const [buttonText, setButtonText] = useState('Login');
  const [passwordBorderState, setPasswordBorderState] =
    useState('input-primary');
  const [buttonBackground, setButtonBackground] = useState('btn-success');
  return (
    <form className="form-control w-64 sm:w-96">
      <SignUpToggle setSignUp={setSignUp} signUp={signUp} />
      <h1 className="text-4xl mb-6">Login</h1>
      <label className="label" htmlFor="username">
        Username
      </label>
      <input
        autoFocus
        className={`input  input-md rounded-md ${userBorderState}`}
        type="text"
        name="username"
        id="username"
        value={loginUsername}
        onChange={(e) => {
          setLoginUsername(e.target.value);
          setUserBorderState('input-primary');
        }}
      />
      <label className="label" htmlFor="password">
        Password
      </label>
      <input
        className={`input  input-md rounded-md ${passwordBorderState}`}
        type="password"
        name="password"
        id="password"
        value={loginPassword}
        onChange={(e) => {
          setLoginPassword(e.target.value);
          setPasswordBorderState('input-primary');
        }}
      />
      <button
        className={`btn ${buttonBackground} btn-md mt-8 rounded-md normal-case`}
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          try {
            const x = await userLogin(loginUsername, loginPassword);
            if (x) {
              setUserCredentials(x);
            } else {
              setUserBorderState('input-error');
              setPasswordBorderState('input-error');
              setButtonBackground('btn-error');
              setButtonText('Incorrect Username or Password');
              setTimeout(() => {
                setButtonBackground('btn-success');
                setButtonText('Login');
              }, 3500);
            }
          } catch (error) {
            setUserBorderState('input-error');
            setPasswordBorderState('input-error');
          }
        }}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default LoginForm;

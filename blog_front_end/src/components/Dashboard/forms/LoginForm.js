import { useState } from 'react';
import SignUpToggle from './SignUpToggle';
import userLogin from '../../../requests/userLogin';

const LoginForm = ({ signUp, setSignUp, setUserCredentials }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [userBorderState, setUserBorderState] = useState('input-primary');
  const [buttonText, setButtonText] = useState('Login');
  const [testAccount, setTestAccount] = useState(
    <p>
      Click Here To Login As Test User.
      <span className="text-xs"></span>
    </p>
  );
  const [passwordBorderState, setPasswordBorderState] =
    useState('input-primary');
  const [buttonBackground, setButtonBackground] = useState('btn-success');
  const [testButtonBackground, setTestButtonBackground] =
    useState('btn-accent');
  return (
    <form className="form-control w-64 sm:w-96">
      <SignUpToggle setSignUp={setSignUp} signUp={signUp} />
      <button
        className={`mb-6 btn ${testButtonBackground} btn-lg mt-8 rounded-md normal-case`}
        onClick={async (e) => {
          e.preventDefault();

          const x = await userLogin('Test_User', 'test');
          if (x) {
            setUserCredentials(x);
          } else {
            setTestAccount('Error, something went wrong');
            setUserBorderState('input-error');
            setPasswordBorderState('input-error');
            setTestButtonBackground('btn-error');
            setTimeout(() => {
              setTestAccount(
                <p>
                  Login As Test User
                  <span className="text-xs"> (no account needed)</span>
                </p>
              );
              setTestButtonBackground('btn-info');
            }, 3500);
          }
        }}
      >
        {testAccount}
      </button>
      <h1 className="text-4xl mb-6">Login</h1>

      <label className="label" htmlFor="username">
        Username
      </label>
      <input
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

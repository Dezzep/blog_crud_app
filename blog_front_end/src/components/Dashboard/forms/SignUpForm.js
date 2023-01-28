import { useState } from 'react';
import LoginLoader from './LoginLoader';
import userCreate from '../../../requests/userCreate';
import checkUser from '../../../requests/checkUser';
import SignUpToggle from './SignUpToggle';
const SignUpForm = ({ setSignUp, signUp, setUserCredentials }) => {
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpLastName, setSignUpLastName] = useState('');
  const [backgroundUsername, setBackgroundUsername] = useState('input-primary');
  const [backgroundPassword, setBackgroundPassword] = useState('input-primary');
  useState('input-primary');
  const [backgroundEmail, setBackgroundEmail] = useState('input-primary');
  const [backgroundFirstName, setBackgroundFirstName] =
    useState('input-primary');
  const [backgroundLastName, setBackgroundLastName] = useState('input-primary');
  const [buttonText, setButtonText] = useState('Sign Up');
  const [buttonBackground, setButtonBackground] = useState('btn-success');
  const [displayLoader, setDisplayLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resetButton = () => {
      setTimeout(() => {
        setButtonText('Sign Up');
        setButtonBackground('btn-success');
      }, 3000);
    };

    let keepGoing = true;
    const setError = (checkValue, set) => {
      if (checkValue === '') {
        set('input-error');
        setButtonText('Please fill out all fields');
        setButtonBackground('btn-error');

        keepGoing = false;
      } else {
      }
    };
    setError(signUpUsername, setBackgroundUsername);
    setError(signUpPassword, setBackgroundPassword);
    setError(signUpConfirmPassword, setBackgroundPassword);
    setError(signUpEmail, setBackgroundEmail);
    setError(signUpFirstName, setBackgroundFirstName);
    setError(signUpLastName, setBackgroundLastName);
    if (!keepGoing) {
      resetButton();
      return;
    }

    if (signUpPassword !== signUpConfirmPassword) {
      setBackgroundPassword('input-error');
      setButtonText('Passwords do not match');
      setButtonBackground('btn-error');
      resetButton();
      return;
    }
    const userValid = await checkUser(signUpUsername);

    if (!userValid) {
      setBackgroundUsername('input-error');
      setButtonText('Username already exists');
      setButtonBackground('btn-error');
      resetButton();
      return;
    } else {
      const register = await userCreate(
        signUpUsername,
        signUpPassword,
        signUpEmail,
        signUpFirstName,
        signUpLastName
      );
      if (register) {
        setButtonText('Success!');
        setButtonBackground('btn-success');
        setDisplayLoader(true);

        setTimeout(() => {
          setUserCredentials([
            {
              username: signUpUsername,
              email: signUpEmail,
              firstName: signUpFirstName,
              lastName: signUpLastName,
            },
          ]);
        }, 2000);
      } else {
        setButtonText('Error');
        setButtonBackground('btn-error');
        resetButton();
      }
    }
  };
  return (
    <div>
      {displayLoader ? (
        <LoginLoader />
      ) : (
        <form className="form-control w-64 sm:w-96">
          <SignUpToggle setSignUp={setSignUp} signUp={signUp} />
          <h1 className="text-4xl mb-6">Sign Up</h1>

          <label className="label" htmlFor="firstname">
            First Name
          </label>
          <input
            className={`input ${backgroundFirstName} input-md rounded-md`}
            type="text"
            name="username"
            id="username"
            value={signUpFirstName}
            onChange={(e) => {
              setSignUpFirstName(e.target.value);
              setBackgroundFirstName('input-primary');
            }}
          />
          <label className="label" htmlFor="lastname">
            Last Name
          </label>
          <input
            className={`input ${backgroundLastName} input-md rounded-md`}
            type="text"
            name="lastname"
            id="lastname"
            value={signUpLastName}
            onChange={(e) => {
              setSignUpLastName(e.target.value);
              setBackgroundLastName('input-primary');
            }}
          />

          <label className="label" htmlFor="signupusername">
            Username
          </label>
          <input
            className={`input ${backgroundUsername} input-md rounded-md`}
            type="text"
            name="signupusername"
            id="signupusername"
            value={signUpUsername}
            onChange={(e) => {
              setSignUpUsername(e.target.value);
              setBackgroundUsername('input-primary');
            }}
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className={`input ${backgroundEmail} input-md rounded-md`}
            type="email"
            name="email"
            id="email"
            value={signUpEmail}
            onChange={(e) => {
              setSignUpEmail(e.target.value);
              setBackgroundEmail('input-primary');
            }}
          />
          <label className="label" htmlFor="signuppassword">
            Password
          </label>
          <input
            className={`input ${backgroundPassword} input-md rounded-md`}
            type="password"
            name="signuppassword"
            id="signuppassword"
            value={signUpPassword}
            onChange={(e) => {
              setSignUpPassword(e.target.value);
              setBackgroundPassword('input-primary');
            }}
          />
          <label className="label" htmlFor="signupconfirm">
            Confrim Password
          </label>
          <input
            className={`input ${backgroundPassword} input-md rounded-md`}
            type="password"
            name="signupconfirm"
            id="signupconfirm"
            value={signUpConfirmPassword}
            onChange={(e) => {
              setSignUpConfirmPassword(e.target.value);
              setBackgroundPassword('input-primary');
            }}
          />

          <button
            className={`btn ${buttonBackground} btn-md mt-8 rounded-md `}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            {buttonText}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;

import { useState } from 'react';

import SignUpToggle from './SignUpToggle';

const SignUpForm = ({ setSignUp, signUp }) => {
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

  return (
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
        }}
      />
      <button
        className={`btn ${buttonBackground} btn-md mt-8 rounded-md `}
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          try {
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;

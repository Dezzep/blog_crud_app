import { useState } from 'react';
import userLogin from '../../requests/userLogin';
const Login = ({ setUserCredentials }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex justify-center bg-base-300 p-12">
      <form className="form-control w-64 sm:w-96">
        <h1 className="text-4xl mb-6">Login</h1>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          className="input input-primary input-md rounded-md"
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input input-primary input-md rounded-md"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn btn-primary btn-md mt-8 rounded-md "
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            try {
              const x = await userLogin(username, password);
              if (x) {
                setUserCredentials(x);
                console.log('aaa');
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

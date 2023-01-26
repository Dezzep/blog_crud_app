import { useState } from 'react';
import userLogin from '../requests/userLogin';
const Login = ({ setUserCredentials }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
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

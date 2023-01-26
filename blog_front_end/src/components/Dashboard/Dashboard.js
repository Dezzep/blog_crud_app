import Login from './Login';
import { useState } from 'react';

const Dashboard = ({ setUserCredentials, userCredentials }) => {
  return (
    <div className="mt-24">
      {Object.keys(userCredentials).length > 0 ? (
        <div>
          Welcome, {userCredentials[0].username}
          <h1>Dashboard</h1>
          <p>Dashboard content</p>
        </div>
      ) : (
        <Login setUserCredentials={setUserCredentials} />
      )}
    </div>
  );
};

export default Dashboard;

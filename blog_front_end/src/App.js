import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Blogs from './components/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/nav/NavBar';
import { useState } from 'react';

export default function App() {
  const [userCredentials, setUserCredentials] = useState({});
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'business'
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div data-theme={theme}>
              <NavBar setTheme={setTheme} />
              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/blogs"
          element={
            <div data-theme={theme}>
              <NavBar setTheme={setTheme} />
              <Blogs />
            </div>
          }
        ></Route>
        <Route
          path="/blogCreation"
          element={
            <div data-theme={theme}>
              <NavBar setTheme={setTheme} />
              <Dashboard
                userCredentials={userCredentials}
                setUserCredentials={setUserCredentials}
              />
            </div>
          }
        ></Route>
        <Route
          path="*"
          element={
            <div data-theme={theme}>
              <NavBar setTheme={setTheme} />

              <h1 className="text-4xl mt-32 text-warning">
                404 page not found
              </h1>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

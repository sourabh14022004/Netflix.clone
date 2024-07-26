import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './PagesIo/Home'
import Login from './PagesIo/Login';
import Profile from './PagesIo/Profile';
import Navbar from './ComponentsIo/Navbar';
import Signup from './PagesIo/Signup';
import { AuthContextProvider } from './context/AuthContext';
import ProctedRoute from './ComponentsIo/ProctedRoute';

const App = () => {
  return (
  <>
  <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element = {<Signup/>} />
      <Route path="/profile" 
            element={
            <ProctedRoute><Profile/></ProctedRoute>
            }
      />
    </Routes>
    </AuthContextProvider>
    </>
  );
};

export default App;

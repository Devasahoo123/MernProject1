import React, { createContext, useReducer } from 'react';
import Navebar from './componets/Navebar';
import './App.css';
import Home from './componets/Home';
import About from './componets/About';
import { NavLink, Route, Routes,Router, Switch } from 'react-router-dom';
import Contact from './componets/Contact';
import Login from './componets/Login';
import Signin from './componets/Signin';

import NotFoundPage from './componets/ErorrPage';
import LogOut from './componets/Logout';
import { initialState,reducer } from './reducer/UdeReducer';
// 1: ContextAPI
export const UserContext = createContext();
function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
      <Navebar/>
      <Routes>
        <Route path="/" element={<Home />} />
     

      
        <Route path="/about" element={<About />} />
      
      
        <Route path="/contact" element={<Contact />} />
      

      
        <Route path="/login" element={<Login />} />
      

      
        <Route  path="/signup" element={<Signin />} />

        <Route  path="/logout" element={<LogOut />} />
      

      
        <Route path='/:err' element={<NotFoundPage/>} />
      </Routes>

    </UserContext.Provider>     
    
    </>
  );
}

export default App;

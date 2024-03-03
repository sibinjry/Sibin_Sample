import Header from './pages/header.js';

import Home from './pages/Home.js'
import About from './pages/about.js';
import Addpackages from './pages/addpackages.js';
import Login from './pages/login.js';
import Packages from './pages/packages.js';
import Contact from './pages/contact.js';
import React from 'react';
// import View from './table.js'

import {
  BrowserRouter as Router, Routes,
  Route
} from 'react-router-dom';
import LoginPage from './Authentication/loginPage.js';

function App() {
  // const data = Actions();

  return (
    <>
      {/* <Provider> */}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/addpackages' element={<Addpackages />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      {/* </Provider> */}
    </>
  );
}

export default App;

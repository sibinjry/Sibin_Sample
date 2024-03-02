import Header from './header.js';

import Home from './Home.js'
import About from './about.js';
import Addpackages from './addpackages.js';
import Login from'./login.js';
import Packages from './packages.js';
import Contact from './contact.js';
import React from 'react';
// import View from './table.js'
import { Actions } from "./action";
import { Provider } from "./Context";

import {
  BrowserRouter as Router,Routes,
  Route
} from 'react-router-dom';




function App() {
  const data = Actions();

  return (
    <>
        <Provider value={data}>

    <Header/>
    <Router>
      
      <Routes>
      
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Home.js' element={<Home/>} />
        <Route exact path='/about.js' element={<About/>} />
        <Route exact path='/packages.js' element={<Packages/>} />
        <Route exact path='/addpackages.js' element={<Addpackages/>} />

        <Route exact path='/login.js' element={<Login/>} />
        <Route exact path='/contact.js' element={<Contact/>} />
        <Route exact path='/header.js' element={<Header/>} />
        {/* <Route exact path='/table.js' element={<View/>} /> */}




      </Routes>
    </Router> 
    </Provider>
    </>
  );
}

export default App;

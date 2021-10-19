import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import TvShow from './components/TvShow';
import NotFound from './components/NotFound';
// All React components must act like pure functions with respect to their props.

//Styles
import {GlobalStyle} from './GlobalStyle';


const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path='/ReactProject' element={<Home />} />
      <Route path='/:tvShowId' element={<TvShow/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <GlobalStyle/>
  </Router>
);

export default App;

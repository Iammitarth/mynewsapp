import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,Route,Routes} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apikey = process.env.REACT_NEWS_API="e845c5db0e034185b2b10513f4d6b6f2"
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element = {<News key="general" apikey = {apikey} pageSize = {pageSize} country = "in" category = "general"/>}/>
          <Route exact path="/business" element = {<News key="business" apikey = {apikey} pageSize = {pageSize} country = "in" category = "business"/>}/>
          <Route exact path="/entertainment" element = {<News key="entertainment" apikey = {apikey} pageSize = {pageSize} country = "in" category = "entertainment"/>}/>
          <Route exact path="/general" element = {<News key="general" apikey = {apikey} pageSize = {pageSize} country = "in" category = "general"/>}/>
          <Route exact path="/health" element = {<News key="health" apikey = {apikey} pageSize = {pageSize} country = "in" category = "health"/>}/>
          <Route exact path="/science" element = {<News key="science" apikey = {apikey} pageSize = {pageSize} country = "in" category = "science"/>}/>
          <Route exact path="/sports" element = {<News key="sports" apikey = {apikey} pageSize = {pageSize} country = "in" category = "sports"/>}/>
          <Route exact path="/technology" element = {<News key="technology" apikey = {apikey} pageSize = {pageSize} country = "in" category = "technology"/>}/>
        </Routes>
        </Router> 
      </div>
    )
  
}

export default App



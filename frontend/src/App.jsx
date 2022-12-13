import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WebFont from "webfontloader"
import React from 'react';
import Home from './Pages/Home/Home';
import Content from './Pages/Content/Content';
import Register from './Pages/Register/Register';
import Topic from './Pages/Topic/Topic';
import Login from './Pages/Login/Login';



function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/topic" element={<Topic />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Routes>
    </Router>
  );
}

export default App;

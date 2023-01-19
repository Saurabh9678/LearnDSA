import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WebFont from "webfontloader"
import React from 'react';
import Content from './Pages/Content/Content';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Topic from './Pages/Topic/Topic';




function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto Mono","Roboto", "Droid Sans", "Chilanka"]
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
      
      <Route exact path="/" element={ <Home/>}/>
      <Route exact path="/contents" element={ <Topic/>}/>
      <Route exact path="/contents/:keyword" element={ <Topic/>}/>
      <Route exact path="/content/:id" element={ <Content/>}/>
      <Route exact path="/login" element={ <Login/>}/>
      <Route exact path="/register" element={ <Register/>}/>
      <Route path="*" element={<div>Page not found 404</div>}/>

      </Routes>
    </Router>
  );
}

export default App;

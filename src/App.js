import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Home from './pages/Home/Home';
import {useSelector, useDispatch} from 'react-redux';
import { selectNav } from './redux/nav/navSlice';



function App() {
  const nav = useSelector(selectNav)


  return (
    <div className='font-normal'>
      {
        nav === "home"  && 
        <>
          <Header/>
          <Home/>
          <Footer/>
        </>
      }
      {nav === "coming-soon" &&  <ComingSoon/>}
      
    </div> 
  )
}

export default App;

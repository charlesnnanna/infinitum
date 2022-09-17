import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../redux/nav/navSlice'; 
import '../../../styles/home.css'


function Hero(props) {
    const dispatch = useDispatch()
    return (
        <div className=' flex flex-col-reverse lg:flex-row   sm:flex-nowrap flex-wrap tracking-wide lg:justify-between px-4 sm:px-6 lg:px-24 sm:py-10 lg:pt-32 lg:pb-24'>
            
            <div className=''>
                <h1 className=' py-4 leading-snug sm:leading-snug lg:leading-snug font-medium text-5xl lg:text-6xl sm:w-96 lg:w-10/12'>Hero goes here goes here</h1>
                <p className='py-4 sm:leading-snug lg:max-w-md text-2xl lg:text-3xl'>The revolutionary wallet for <br/> today's crypto landscape</p>
                <button onClick={() => {dispatch(setPage("coming-soon"))}} className='border border-black hover:bg-black hover:text-white w-full sm:w-48 my-4 font-semibold px-6 py-4 rounded-xl  ease-in-out duration-150'>Get Started</button>
            </div>
            <div className=''>
                <img className='hidden sm:block' src = "phone.svg" alt = "mobile-phone" />
                <img className='sm:hidden' src = "phone-mobile.svg" alt = "mobile-phone" />
            </div>
        </div>
    );
}

export default Hero;
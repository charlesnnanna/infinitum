import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../redux/nav/navSlice';
import '../../../styles/home.css'

function About(props) {
    const dispatch = useDispatch()
    return (
        <div  className='sm:py-14 py-4 flex flex-col-reverse sm:flex-col lg:flex-row sm:bg-compBg sm:text-white sm:flex-nowrap flex-wrap tracking-wide justify-between sm:px-6 lg:px-24 sm:py-4 lg:py-20'>
            <div className='lg:w-full'>
                <img id= 'about-img' className='' src = "about-img.svg" alt = "mobile-phone" />
            </div>

            <div className=' bg-compBg py-6 lg:ml-20 lg:mt-20 px-4 text-white'>
                <h2 className='py-4 sm:leading-snug text-4xl lg:text-5xl sm:w-10/12'>What is infinitum?</h2>
                <p className=' py-4 max-w-88 sm:max-w-full font-semibold sm:leading-snug text-md'>We created Infinitum to create a stronger, more diverse and efficient cryptoeconomy. </p>
                <p className='py-4 max-w-88 sm:max-w-full sm:leading-snug text-md'>
                    We launched in 2022 with the radical idea after developing our initial cryptocurrency, 
                    velacoin. Today, we are proud to support users all over the world.
                </p>

                <button onClick={() => {dispatch(setPage("coming-soon"))}}  className='border border-white hover:bg-white hover:text-compBg  ease-in-out duration-150 w-full sm:w-48 my-4 font-semibold sm:px-6 py-4 rounded-xl'>About Us</button>

            </div>
        </div>
    );
}

export default About;
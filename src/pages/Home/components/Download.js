import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../redux/nav/navSlice';
import '../../../styles/home.css'


function Download(props) {
    const dispatch = useDispatch()
    return (
        <div id = 'download-container' className='mt-10 lg:mt-20  lg:pt-0 flex flex-col lg:flex-row justify-center text-white items-center sm:bg-compBg lg:bg-compBg px-4 sm:px-6 lg:px-24 sm:py-4 lg:py-2 '>
            <div className='sm:mt-6 sm:text-center lg:text-left lg:w-5/12 sm:text-white'>
                <h2 className=' py-4 sm:leading-snug text-4xl lg:w-80'>Ready to get started?</h2>
                <p className=' py-4 max-w-88   font-semibold sm:leading-snug text-md' >Nibh pellentesque eleifend porta vulputate commodo etiam amet lectus in. Ante aenean ut ipsum fermentum nulla eget quam molestie. </p>
                <p className=' py-4 max-w-88   sm:leading-snug text-md'>Nibh pellentesque eleifend porta vulputate commodo etiam amet lectus in. Ante aenean ut ipsum fermentum nulla eget quam molestie. </p>
                <button onClick={() => {dispatch(setPage("coming-soon"))}} className='border border-white w-full hover:bg-white hover:text-compBg  ease-in-out duration-150 sm:w-48 my-4 font-semibold sm:px-6 py-4 rounded-xl'>Download</button>
            </div>

            <div id = "phone-screen" className=' w-80 lg:w-4/12  p-0 mt-11'>
                <img src = "screen.svg" alt = "screen"/>
            </div>

            
        </div>
    );
}

export default Download;
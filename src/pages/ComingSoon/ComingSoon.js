import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { selectNav, setPage } from '../../redux/nav/navSlice';


function ComingSoon(props) {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col justify-center items-center border border-black h-screen'>
            <img className='w-96' src = "logo.svg" alt = "logo" />
            <h1 className='text-4xl py-6'>Coming Soon</h1>
            <button onClick = { () => {dispatch(setPage('home'))}}className='border border-black rounded-xl p-7 hover:bg-compBg hover:text-white ease-in-out duration-150'>Back to Homepage</button>
        </div>
    );
}

export default ComingSoon;
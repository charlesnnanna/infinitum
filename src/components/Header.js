import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { React, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import "../styles/header.css"
import { selectNav, setPage } from '../redux/nav/navSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
// REDUX
const dispatch = useDispatch();
const nav = useSelector(selectNav)
//const counter = useSelector((state) => state.counter)
const navigation = [
  { name: 'Home', current: nav === "home" ? true : false, click: () => {dispatch(setPage("home"))} },
  { name: 'About', current: nav === "about" ? true : false, click: () => {dispatch(setPage("coming-soon"))} },
  { name: 'Features', current: nav === "features" ? true : false, click: () => {dispatch(setPage("coming-soon"))} },
  { name: 'FAQ', current: nav === "faq" ? true : false, click: () => {dispatch(setPage("coming-soon"))} }
]

  return (

 
    <Disclosure as="nav" id = "sticky" className="bg-white shadow-md p-2 sm:p-0">
      {({ open }) => (
        <>
          <div  className="max-w-7xl  px-4 sm:px-6 lg:pl-24">
            <div  className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center w-full sm:pt-11 sm:pb-11" id = "content-container">
                <div className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="logo-sc.png"
                    alt="logo"
                  />
                  <img
                    className="hidden w-80 h-20 lg:block h-8 w-auto"
                    src="logo-lg.svg"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 " id = "navigation">
                  <div className="flex space-x-4">
                    {
                    navigation.map(function(item, index){
                      return (
                        <a onClick = {() => item.click()}  key = {index}
                         className= {
                            classNames(
                              item.current ? "border-b-2 border-text" : "", " px-11 text-sm font-bold ease-in-out duration-150 hover:text-gray-700"
                            )
                         }>
                          {item.name}
                        </a>
                      )
                    })
                    }
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                onClick={() => {dispatch(setPage('home'))}}
                as="a"
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => {dispatch(setPage('about'))}}
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => {dispatch(setPage('faq'))}}
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => {dispatch(setPage('faq'))}}
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                FAQ
              </Disclosure.Button>
            </div>
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default Header;
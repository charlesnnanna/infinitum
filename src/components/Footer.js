import React from 'react';
import { useDispatch } from 'react-redux';
import {setPage} from "../redux/nav/navSlice"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



function Footer(props) {
    const dispatch = useDispatch()

    const navigation = [
        {
            title : "Product",
            nav : [
                {
                    button :  "Overview",
                    click : () => {dispatch(setPage("coming-soon"))}
                },
    
                {
                    button : "Features",
                    click: () => {dispatch(setPage("coming-soon"))}
                },
                
                {
                    button : "Solutions",
                    click: () => {dispatch(setPage("coming-soon"))}
                },
    
                {
                    button : "Tutorials",
                    click: () => {dispatch(setPage("coming-soon"))}
                },
    
                {
                    button : "Pricing",
                    click: () => {dispatch(setPage("coming-soon"))}
                },
    
                {
                    button : "Releases",
                    click: () => {dispatch(setPage("coming-soon"))}
                }
                
            ],
            display : true,
    
        },
    
        {
            title : "Company",
            nav : [
                    {
                        button : "About Us",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Careers",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Press",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "News",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "MediaKit",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Contact",
                        click: () => {dispatch(setPage("coming-soon"))}
                    }
                 ],
            display : true
        },
    
        {
            title : "Resources",
            nav : [
                    {
                        button : "Blog",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Newsletter",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Events",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Tutorials",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Help center",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },
    
                    {
                        button : "Support",
                        click: () => {dispatch(setPage("coming-soon"))}
                    }
                ],
            display : false
        },
    
        {
            title : "Use Cases",
            nav : [
                    {
                        button : "Startups",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Entreprise",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Governments",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "SaaS",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "MarketPlace",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Ecommerce",
                        click: () => {dispatch(setPage("coming-soon"))}
                    }
                ],
            display : false
        },
    
        {
            title : "Social",
            nav : [
                    {
                        button : "Twitter",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Linkedin",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button: "Facebook",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Github",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "AngelList",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Dribble",
                        click: () => {dispatch(setPage("coming-soon"))}
                    }
                ],
            display : false
        },
    
        {
            title : "Legal",
            nav : [
                    {
                        button : "Terms",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Privacy",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Cookies",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Licenses",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Settings",
                        click: () => {dispatch(setPage("coming-soon"))}
                    },

                    {
                        button : "Contact",
                        click: () => {dispatch(setPage("coming-soon"))}
                    }
                ],
            display : true
        }
    ]

    return (
        <div className=' px-4 sm:px-6 lg:px-24 py-2 sm:py-4 lg:pt-6 lg:pb-10'>
            <div className='w-full flex justify-center p-5'>
                <img className='sm:hidden w-52 h-12' src = "logo-lg.svg" alt = "logo-for-mobile"/>
            </div>

            <div className='flex flex-row flex-wrap sm:mt-20 justify-around'>
                    {
                        navigation.map (function(nav, index){
                            return(
                                <div className = { classNames (
                                    !nav.display ? "sm:hidden" : "", ' sm:mt-0 mt-7 '
                                ) }>
                                    <h3 className='text-xs w-32 px-4 font-semibold py-4'>{nav.title}</h3>
                                    <ul>
                                        {
                                            nav.nav.map(function(item, i){
                                                return <li onClick = {() => {item.click()}}className='py-2 w-32 px-4 text-sm ease-in-out duration-150 hover:text-gray-700' key = {i}>{item.button}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
            </div>
            <p className='text-left sm:text-right py-10 text-sm'>&copy; 2022 Infinitum. All rights reserved.</p>
            <img className=' hidden sm:block py-5' src = "logo-lg.svg" alt = "logo-for-lg"/>
        </div>
    );
}

export default Footer;
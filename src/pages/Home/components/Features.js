import React from 'react';
import '../../../styles/home.css'



const features = [
    {title : "Secure", image : "secure.svg", description : "Nibh pellentesque eleifend porta vulputate commodo etiam amet lectus in. Ante aenean ut ipsum fermentum nulla eget quam molestie. "},
    {title: "Own your own data", image : "own-data.svg", description : "Nibh pellentesque eleifend porta vulputate commodo etiam amet lectus in. Ante aenean ut ipsum fermentum nulla eget quam molestie. "},
    {title : "Trade and explore tokens", image : "trade-tokens.svg", description : "Nibh pellentesque eleifend porta vulputate commodo etiam amet lectus in. Ante aenean ut ipsum fermentum nulla eget quam molestie. "},
]
function Features(props) {
    return (
        <div className=' flex flex-col px-4 sm:px-6 lg:px-24 sm:py-4 lg:py-20'>
            <div className='flex flex-col justify-center items-start sm:items-center text-left sm:text-center py-7'>
                <h2 className=' py-4 sm:leading-snug text-4xl '>Our features</h2>
                <p className='py-7 max-w-88 sm:max-w-full sm:w-6/12 font-normal sm:leading-snug text-md'>
                    Nibh pellentesque eleifend porta vulputate 
                    commodo etiam amet lectus in. Ante aenean ut ipsum fermentum nulla eget quam molestie. 
                </p>
            </div>

            <div id = "features" className=' flex flex-col sm:flex-wrap lg:flex-row rounded-3xl py-10 sm:py-0 justify-around items-center'>
                {
                    features.map(function(feature, index){
                        return(
                            <div  className='flex flex-col items-center sm:py-10  justify-center text-center' key={index}>
                                <img className=' w-24 sm:w-40' src = {feature.image} alt = {feature.title} />
                                <h2 className='sm:py-10 py-7 w-56 sm:leading-snug text-2xl '>{feature.title}</h2>
                                <p className='w-72 pb-11 sm:pb-0'>{feature.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Features;
import React from 'react'
import './fromMenu.css';
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle';
import image1 from '../../../assets/home/featured.jpg'
export default function FromMenu() {
    return ( 
        <div className='from-menu bg-fixed max-w-screen-xl mb-20 text-white p-5'>
            
            <SectionTitle  heading="FROM OUR MENU" description="Check it out"> </SectionTitle>
            <div className='flex justify-center items-center gap-6 px-20 py-16'>
                <img src={image1}  className='w-1/3' alt="" />
                <div className='w-1/2 space-y-6'>
                    <p>March 20, 2023
                        <br />
                        WHERE CAN I GET SOME?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline  border-b-4 text-white border-white'>Read More</button>
                </div>
            </div>
        </div>
    )
}

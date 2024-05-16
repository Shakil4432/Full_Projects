import React from 'react'

export default function PopularMenuCard({popularMenu}) {
    const {name,recipe, image, category, price} = popularMenu;
  return (
    <div>
        <div className='flex items-center justify-between gap-6 '>
            <div>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[118px] ' src={image} alt="img" />
            </div>
            <div>
                <div className='flex items-center justify-between gap-6'>
                    <h1 className='text-xl'>{name} --------</h1>
                    <span  className='text-orange-300 font-bold'> $ {price}</span>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    </div>
  )
}

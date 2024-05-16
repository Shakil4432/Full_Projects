import React, { useEffect, useState } from 'react'
import PopularMenuCard from '../../../Shared/PopularMenuCard/PopularMenuCard';
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle';

export default function PopularMenu() {
    const [popularMenus, setPopularMenus] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(menus=>{
            const filterMenus = menus.filter(menu => menu.category === 'popular');
            setPopularMenus(filterMenus);
        })
    },[])
  return (
    <div className='max-w-4xl mx-auto my-20'>
        <SectionTitle heading="FROM OUR MENU" description="Check it out"></SectionTitle>
       <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center mb-10 gap-6'>
        {
            popularMenus.map(popularMenu => <PopularMenuCard key={popularMenu._id} popularMenu={popularMenu}></PopularMenuCard>)
        }
       </div>
       <div className='flex items-center justify-center'>
       <button className='btn btn-outline text-bold  border-b-4'>View Full Menu</button>
       </div>
    </div>
  )
}

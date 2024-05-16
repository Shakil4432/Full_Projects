import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import MiniBanner from '../MiniBanner/MiniBanner'
import PopularMenu from '../PopularMenu/PopularMenu'
import Number from '../Number/Number'
import RecomendsItems from '../RecomendsItems/RecomendsItems'
import FromMenu from '../FromMenu/FromMenu'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <MiniBanner></MiniBanner>
        <PopularMenu></PopularMenu>
        <Number></Number>
        <RecomendsItems></RecomendsItems>
        <FromMenu></FromMenu>
    </div>
  )
}

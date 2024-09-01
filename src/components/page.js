import React from 'react'
import locations from './locations'
import Travel from './travel'
import './styles.css'

const Page = () => {
  const locays = locations.map((location)=>{
    return <Travel {...location} />
  })
  return (
    <div className='app'>
      <div className='header'>
        <h1>Travel Journals</h1>
      </div>
      <div className='container'>
        {locays}
      </div>
    </div>
  )
}

export default Page

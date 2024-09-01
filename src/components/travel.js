import React from 'react'
import './styles.css'

const Travel = (props) => {
  return (
    <div className='travel'>
      <div className='image'>
        <img src={props.img} alt='Location image'/>
      </div>
      <div className='right'>
        <h1 className='title'>{props.name}</h1>
        <div className='rating'><img src='./star.png' alt='star' />{props.rating}</div>
        <b className='date'>{props.startDate} - {props.endDate}</b>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Travel

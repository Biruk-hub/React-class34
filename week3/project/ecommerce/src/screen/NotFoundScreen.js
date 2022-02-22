import React from 'react'
import page_not_found from '../assets/page_not_found.png'

const NotFoundScreen = () => {
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <img src={page_not_found} alt='page not found' className='w-1/2 h-1/2'/>
    </div>
  )
}

export default NotFoundScreen
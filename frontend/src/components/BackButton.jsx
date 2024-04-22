import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

import React from 'react'

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link to={destination} className="px-4 py-1 text-white rounded-lg w-fit" >
            <IoArrowBackCircleOutline className="text-4xl" />
        </Link>
    </div>
  )
}

export default BackButton

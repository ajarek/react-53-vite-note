import React from 'react'
import Time from '../components/Time'
import { FaWifi, FaBatteryThreeQuarters } from 'react-icons/fa'
import { BsReception4 } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-time'>
        <Time />
      </div>
      <div className='icons'>
        <BsReception4 />
        <FaWifi />
        <FaBatteryThreeQuarters />
      </div>
    </div>
  )
}

export default Header

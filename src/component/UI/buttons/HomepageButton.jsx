import React from 'react'
import { Link } from 'react-router-dom';

const HomepageButton = () => {
    return (
      
    <Link to='/login' className='btn btn-secondary mt-5'>
    Click to Visit Login Page
  </Link>
  )
}
export default HomepageButton;

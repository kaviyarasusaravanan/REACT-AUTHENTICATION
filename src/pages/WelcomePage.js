import React from 'react';
import { Link } from 'react-router-dom';




const WelcomePage = () => {
  const welcomeNote="Welcome, Click Me to Register 😁";
  return (
    <div className='welcome-page'>
      <Link to={'/register'}>
       <button className='welcome-btn'>
        {welcomeNote}
      </button>
      </Link>

    </div>
  )
}

export default WelcomePage

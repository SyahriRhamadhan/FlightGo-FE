import React from 'react'
import logo from '../assets/logo.png'
import lonceng from '../assets/lonceng.png'
function Navbar() {
  const menus = ['Wishlist', 'History', 'Notification', 'Profiles']
  return (
    <div className='bg-img'>
      <div className='container max-w-5xl mx-auto flex flex-row pt-10 items-center space-x-48'>
       
          <img alt='logo' src={logo} className='w-36'/>
        
        <div className='flex-1'>
          <ul className='font-semibold flex flex-row space-x-8 text-slate-700 cursor-pointer'>
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-row space-x-8'>
          <img alt='lonceng' src={lonceng} style={{width: 30, height: 24}}/>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  
  )
}

export default Navbar

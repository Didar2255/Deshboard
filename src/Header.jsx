import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'

function Header({ OpenSidebar }) {
    return (
        <header className='header'>

            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div>
                <h4>Dashboard</h4>
            </div>
            <div className='header-left'>
                <BsSearch className='icon' />
            </div>
            <div className='header-right'>
                <BsFillBellFill className='hed-icon' />
                <BsFillEnvelopeFill className='hed-icon' />
                <BsPersonCircle className='hed-icon' />
            </div>
        </header>
    )
}

export default Header
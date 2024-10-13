import React from 'react'
import { BsCart3 } from 'react-icons/bs'
function SideBar() {
    return (
        <aside id="sidebar">
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' />Shop
                </div>
                <span className='icon close_icon'></span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon' /> Deshboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon' /> Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon' /> Catagories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon' /> Customer
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar
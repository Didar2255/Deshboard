import React from 'react'
import { BsFillGridFill, BsCalendar2Day, BsChatRightDotsFill, BsFillGearFill } from 'react-icons/bs'
import { SiAsana } from "react-icons/si";
import { GoFileMedia } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { AiTwotoneInteraction } from "react-icons/ai";
import logo from './image/download.jpg'
function SideBar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='logo'>
                <img src={logo} />
                <h4>Admin Deshbord</h4>
            </div>

            <ul className='sidebar-list'>
                <div className='sidebar-title'>
                    {/* <div className='sidebar-brand'>
                        <BsCart3 className='icon_header ' />Shop
                    </div> */}
                    <span className='icon close_icon' onClick={OpenSidebar}>x</span>
                </div>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGridFill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCalendar2Day className='icon' /> Caleder
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <SiAsana className='icon' /> Task
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsChatRightDotsFill className='icon' /> Messages
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <GoFileMedia className='icon' /> Portfolio
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href=''>
                        <IoIosPeople className='icon' /> Member
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <AiTwotoneInteraction className='icon' /> Activity
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar
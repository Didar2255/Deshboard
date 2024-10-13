import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import Home from './Home'
import { useState } from 'react'
function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-continer'>

      <Header OpenSidebar={OpenSidebar}></Header>

      <SideBar openSidebarToggle={openSidebarToggle}></SideBar>
      <Home></Home>
    </div>
  )
}

export default App

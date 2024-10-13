import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import Home from './Home'
function App() {
  return (
    <div className='grid-continer'>
      <Header></Header>
      <SideBar></SideBar>
      <Home></Home>
    </div>
  )
}

export default App

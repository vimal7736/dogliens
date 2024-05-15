import React from 'react'
import Navbar from "./component/Navbar"
import ComboBox from './component/Combobox'
import ResponsiveAppBar from './component/Appbar'
import Sidebarr from './component/Sidebarr'
import Footer from './component/Footer'
const App = () => {
  return (
    <div >
      
      <ResponsiveAppBar/>
      <Sidebarr/>
      <Footer/>
    </div>
  )
}

export default App

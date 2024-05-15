import React from 'react'
import aishu from "../images/aishu.jpeg"

const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex" , justifyContent:"space-between"}}>
        <div>Dogliens</div>
        <img src={aishu} width={50} height={50} />
        <div>Home</div>
        <div>Profile</div>
        <div>Setting</div>
        <div>Logout</div>
      </div>
    </div>
  )
}

export default Navbar

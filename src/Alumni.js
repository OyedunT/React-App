import React from 'react'

const Alumni = () => {
  return (
    <div className='alumni_container'>
        <span className='alum'>Our alumni work at world-class<br/> companies around the world including</span>
        <div className='img_container'>
        <div className='img_container1'>
             <img src={require("./images/google.png")} alt="" />
             <img src={require("./images/Paystack.png")} alt="" />
             <img src={require("./images/edozzier.png")} alt="" />
        </div>
        <div className='img_container2'>
             <img src={require("./images/Interswitch.png")} alt="" />
             <img src={require("./images/brewery.png")} alt="" />
             <img src={require("./images/moneymie.png")} alt="" />
        </div>
        <div className='img_container3'>
             <img src={require("./images/Andela-log-landscape-blue-400px.png")} alt="" />
             <img src={require("./images/Wema-Bank-Logo.png")} alt="" />
             <img src={require("./images/Nigerian_Army.png")} alt="" />
        </div>
        <div className='img_container4'>
             <img src={require("./images/Microsoft_logo.png")} alt="" />
             <img src={require("./images/clan-logo.png")} alt="" />
             <img src={require("./images/aella-credit.png")} alt="" />
        </div>
        </div>
       
    </div>
  )
}

export default Alumni
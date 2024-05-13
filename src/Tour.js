import React from 'react'

const Tour = () => {
  return (
    <div className='tour_container'>
    <div className='tour'>
    <iframe  width="396" height="223" src="https://www.youtube.com/embed/HgC6bjMbqpw" title="Campus Tour | SQI College of ICT, Ibadan" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

    </iframe>
    </div>
    <div className='tour_container2'>
    <h1 className='tour2'>Take a Tour</h1>
<span className='tour3'>Our campus is a living centre for innovation and creativity for sustainability.<br/>
We love showing students our campus and allowing them to see, hear and feel <br/>the excitement that comes with being part of the Central community which is<br/> an atmosphere that is open-minded, always exciting, and filled with academic<br/> excellence.
</span>
<button className='apply'>
Apply Now
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
</button>
    </div>
    </div>
  )
}

export default Tour
import React from 'react'

const About = () => {
  return (
    <div className='aboutDiv d-flex justify-content-center  '>
    <div style={{marginLeft:'40px'}} className="col-lg-6 mt-5">
        <p style={{fontSize:'30px'}} className='text-warning text-center fw-bolder'>About Our Restaurant</p>
        <h1 className='text-dark text-center aboutHead'>We'll Make Your Event
        Perfect In Every Way</h1>
        <p className='text-dark aboutPara'>Dolor sit a met lorem ipsum m tempor montes, per ullamcorper vel fermen venenatis cum facilisi mollis euismod, torquent  mus senectus ultricies lacinia platea integeculis natoque leifend erat sociis tempo potenti euismod torquent.</p>
    </div>
    <div className="col "></div>
    <div className="col-lg-5 aboutImgDiv  ">
        <img className='aboutImg' src="https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-277.jpg" alt="" />
        <div className='animDiv' >
            <img className='animImage' src="https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-458.jpg" alt="" />
        </div>
    </div>
</div>
  )
}

export default About
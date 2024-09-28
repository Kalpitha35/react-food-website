import React from 'react'

const Footer = () => {
  return (
  <>
  <hr />
  <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Opening Hours</h3>
                        <ul>
                            <li><a href="#">Monday-Friday 09:00-22:00</a></li>
                            <li><a href="#">Saturday 11:00-00:00</a></li>
                            <li><a href="#">Sunday 11:00 - 23:00</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Restaurant</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        
<h2>We'll Make Your Event Perfect In Every Way</h2>                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
            </div>
            <h2 className='copy-right'><span className='text-warning'>Queso Queen</span> © 2024</h2>

        </footer>
    </div>
  </>
  )
}

export default Footer
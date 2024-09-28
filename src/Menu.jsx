import React from 'react'

const Menu = () => {
    return (
        <>
        <hr />
        <br />
            <div className='menuDiv'>
                <h1  className='menu-head'>Our Specials Menu</h1>

                <section className="py-5 ">

                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center menu-div ">


                            <div className="col mb-5 items ">

                                <div className="card shadow bg-dark h-100 menuItem">
                                    <img className="card-img-top  menu-img" src="https://validthemes.net/site-template/foodu/assets/img/menu/1.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center text-light">
                                            <h5 className="fw-bolder">Pizza</h5>
                                            <hr />
                                            <p className="fw-bolder">Mutton, Olive Oil, Salt</p>

                                            <hr />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis dolorum exercitationem facere!</p>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><button className="btn btn-outline-dark bg-light mt-auto" href="#">View options</button></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-5 items">

                                <div className="card shadow bg-dark h-100 menuItem">
                                    <img className="card-img-top menu-img" src="https://validthemes.net/site-template/foodu/assets/img/menu/2.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center text-light">
                                            <h5 className="fw-bolder">Burger</h5>
                                            <hr />
                                            <p className="fw-bolder">Atlantic, chips, tartare</p>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis dolorum exercitationem facere!</p>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><button className="btn btn-outline-dark bg-light mt-auto" href="#">View options</button></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-5 items">

                                <div className="card shadow bg-dark h-100 menuItem">
                                    <img className="card-img-top menu-img" src="https://validthemes.net/site-template/foodu/assets/img/menu/3.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center text-light">
                                            <h5 className="fw-bolder">Lemonade</h5>
                                            <hr />
                                            <p className="fw-bolder">Ricotta, goat cheese, beetroot</p>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis dolorum exercitationem facere!</p>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><button className="btn btn-outline-dark bg-light mt-auto" href="#">View options</button></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-5 items">

                                <div className="card shadow bg-dark h-100 menuItem">
                                    <img className="card-img-top menu-img" src="https://validthemes.net/site-template/foodu/assets/img/menu/4.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center text-light">
                                            <h5 className="fw-bolder">Chicken Popeyes</h5>
                                            <hr />
                                            <p className="fw-bolder">Ricotta, goat cheese, beetroot</p>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis dolorum exercitationem facere!</p>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center "><button className="btn btn-outline-dark bg-light mt-auto" href="#">View options</button></div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
            <hr />
            <h1 className='text-center' style={{backgroundColor:'white',color:'black'}}>Service We Can Provide</h1>
            <div className="serviceDiv d-flex justify-content-evenly">
                <div className='service1'>
                    <img className='serviceImg' src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg" alt="" />

                    <div className="serviceHover">
                        <div className='serviceIcon'><i class="fa-solid fa-bell-concierge"></i></div>
                        <h6 style={{color:'white', textAlign:'center'}}>We'll Make Your Event
                        Perfect In Every Way</h6>
                    </div>
                </div>

                <div className='service1'>
                    <img className='serviceImg' src="https://t4.ftcdn.net/jpg/06/26/31/55/360_F_626315584_OzONXgoXuGHdThBWiijmjRVHpf8NuAWh.jpg" alt="" />

                    <div className="serviceHover">
                        <div className='serviceIcon'><i class="fa-solid fa-bell-concierge"></i>
                        <h6 style={{color:'white',  marginTop:'30px'}}>We'll Make Your Event
                        Perfect In Every Way</h6></div>
                    </div>
                </div>

                <div className='service1'>
                    <img className='serviceImg' src="https://img.freepik.com/premium-photo/bowl-noodles-with-fork-it-bowl-noodles-with-spoon-it_985092-143.jpg" alt="" />

                    <div className="serviceHover">
                        <div className='serviceIcon'><i class="fa-solid fa-bell-concierge"></i>
                        
                        <h6 style={{color:'white', textAlign:'center',marginTop:'30px'}}>We'll Make Your Event
                        Perfect In Every Way</h6>
                        </div>
                    </div>
                </div>
             

            </div>



        </>
    )
}

export default Menu
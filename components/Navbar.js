import React from 'react'

const Navbar = () => {
    return (
        <div >

            <div class="top-bar bg-dark py-2 py-md-0" id="top-bar">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="top-bar-left text-white text-md-left text-sm-center">
                                <i class="fas fa-map-marker-alt"></i>
                                <span class="ml-2"> Chhatarpur, New Delhi, Delhi 110074</span>
                            </div>
                        </div>

                        <div class="col-lg-4 ml-lg-auto col-md-6">
                            <ul class="list-inline list-unstyled header-socials text-md-right text-sm-center">
                                <li class="list-inline-item"><a href="#!"> <i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#!"> <i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#!"> <i class="fab fa-pinterest-p"></i></a></li>
                                <li class="list-inline-item"><a href="#!"> <i class="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="logo-bar d-none d-md-block d-lg-block bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="logo d-none d-lg-block">

                                <a class="navbar-brand js-scroll-trigger" href="index.html">
                                    <h2 class="mb-0">SM Biotech</h2>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-8 justify-content-end ml-lg-auto d-flex col-12 col-md-12 justify-content-md-center">
                            <div class="top-info-block d-inline-flex">
                                <div class="icon-block">
                                    <i class="ti-mobile"></i>
                                </div>
                                <div class="info-block">
                                    <h5 class="font-weight-500">9999999999</h5>
                                    <p>Call</p>
                                </div>
                            </div>

                            <div class="top-info-block d-inline-flex">
                                <div class="icon-block">
                                    <i class="ti-email"></i>
                                </div>
                                <div class="info-block">
                                    <h5 class="font-weight-500">smbiotech@example.com</h5>
                                    <p>Email Us</p>
                                </div>
                            </div>
                            <div class="top-info-block d-inline-flex">
                                <div class="icon-block">
                                    <i class="ti-time"></i>
                                </div>
                                <div class="info-block">
                                    <h5 class="font-weight-500">Mon-Sat 9:00-19.00 </h5>
                                    <p>Sunday Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="main-navigation" id="mainmenu-area">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary main-nav navbar-togglable rounded-radius">

                        <a class="navbar-brand d-lg-none d-block" href="index.html">
                            <h4 class="h3 mb-0">SM Biotech</h4>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fa fa-bars"></span>
                        </button>


                        <div class="collapse navbar-collapse has-dropdown" id="navbarCollapse">

                            <ul class="navbar-nav ">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" id="navbarWelcome" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarWelcome">
                                        <li><a class="dropdown-item" href="index.html">Home-1</a></li>
                                        <li><a class="dropdown-item" href="index-2.html">Home-2</a></li>
                                        <li><a class="dropdown-item" href="index-3.html">Home-3</a></li>
                                        <li><a class="dropdown-item" href="index-4.html">Home-4</a></li>

                                        <li class="dropdown dropdown-submenu dropright">
                                            <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                                            <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                                                <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                                                <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
                                            </ul>
                                        </li>

                                        <li class="dropdown dropdown-submenu dropleft">
                                            <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                                            <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                                                <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                                                <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item ">
                                    <a href="about.html" class="nav-link js-scroll-trigger">
                                        About
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a href="service.html" class="nav-link js-scroll-trigger">
                                        Services
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a href="pricing.html" class="nav-link js-scroll-trigger">
                                        Pricing
                                    </a>
                                </li>

                                <li class="nav-item ">
                                    <a href="project.html" class="nav-link js-scroll-trigger">
                                        Projects
                                    </a>
                                </li>

                                <li class="nav-item ">
                                    <a href="contact.html" class="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <ul class="ml-lg-auto list-unstyled m-0">
                                <li><a href="contact.html" class="btn btn-white btn-circled">Get a quote</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react';
import "./jquery.mCustomScrollbar.min.css";
import "./animate.css";
import "./style.css";
import "./media-queries.css";

function Home() {
  return (
    <html lang="en">
      <head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bootstrap 4 Template with Sidebar Menu</title>

        {/* CSS */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        
        {/* Favicon and touch icons */}
        <link rel="shortcut icon" href="assets/ico/favicon.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png" />
      </head>
      <body>
        {/* Wrapper */}
        <div className="wrapper">
          {/* Sidebar */}
          <nav className="sidebar">
            {/* close sidebar menu */}
            <div className="dismiss">
              <i className="fas fa-arrow-left"></i>
            </div>
            <div className="logo">
              <h3><a href="index.html">Bootstrap 4 Template with Sidebar Menu</a></h3>
            </div>
            <ul className="list-unstyled menu-elements">
              <li className="active">
                <a className="scroll-link" href="#top-content"><i className="fas fa-home"></i> Home</a>
              </li>
              <li>
                <a className="scroll-link" href="#section-1"><i className="fas fa-cog"></i> What we do</a>
              </li>
              <li>
                <a className="scroll-link" href="#section-2"><i className="fas fa-user"></i> About us</a>
              </li>
              <li>
                <a className="scroll-link" href="#section-5"><i className="fas fa-pencil-alt"></i> Portfolio</a>
              </li>
              <li>
                <a className="scroll-link" href="#section-6"><i className="fas fa-envelope"></i> Contact us</a>
              </li>
              <li>
                <a href="#otherSections" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" role="button" aria-controls="otherSections">
                  <i className="fas fa-sync"></i>Other sections
                </a>
                <ul className="collapse list-unstyled" id="otherSections">
                  <li>
                    <a className="scroll-link" href="#section-3">Our projects</a>
                  </li>
                  <li>
                    <a className="scroll-link" href="#section-4">We think that...</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="to-top">
              <a className="btn btn-primary btn-customized-3" href="#" role="button">
                <i className="fas fa-arrow-up"></i> Top
              </a>
            </div>
            <div className="dark-light-buttons">
              <a className="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
              <a className="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
            </div>
          </nav>
          {/* End Sidebar */}
          {/* Dark overlay */}
          <div className="overlay"></div>
          {/* Content */}
          <div className="content">
            {/* open sidebar menu */}
            <a className="btn btn-primary btn-customized open-menu" href="#" role="button">
              <i className="fas fa-align-left"></i> <span>Menu</span>
            </a>
            {/* Top content */}
            <div className="top-content section-container" id="top-content">
              <div className="container">
                <div className="row">
                  <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="wow fadeIn">Bootstrap 4 Template with <strong>Sidebar Menu</strong></h1>
                    <div className="description wow fadeInLeft">
                      <p>
                        A template with Sidebar Menu made with the Bootstrap 4 framework. Download the template or learn how to create it, step by step, on 
                        <a href="https://azmind.com"><strong>AZMIND</strong></a>.
                      </p>
                    </div>
                    <div className="cta wow fadeIn">
                      <a href="#section-1" className="btn btn-primary btn-customized-2 smooth-scroll" role="button">Get started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* What we do */}
            <div className="section-container" id="section-1">
              <div className="container">
                <div className="row">
                  <div className="col col-md-10 offset-md-1">
                    <h2 className="section-title wow fadeIn">What we do</h2>
                    <div className="section-description wow fadeIn">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor mauris et libero sollicitudin, vitae pretium elit aliquam. 
                        Praesent sagittis, risus nec bibendum facilisis, lorem justo dictum elit, et rhoncus velit purus nec nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About us */}
            <div className="section-container bg-light" id="section-2">
              <div className="container">
                <div className="row">
                  <div className="col col-md-10 offset-md-1">
                    <h2 className="section-title wow fadeIn">About us</h2>
                    <div className="section-description wow fadeIn">
                      <p>
                        Vestibulum sit amet ex vitae libero tempus commodo. Sed laoreet nisl id diam accumsan, vel suscipit enim aliquet. 
                        Nullam id tortor ac nibh placerat suscipit. Fusce vel urna vel purus molestie rutrum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add other sections here */}
          </div>
          {/* End Content */}
        </div>
        {/* End Wrapper */}
        {/* JavaScript */}
        <script src="assets/js/jquery-3.3.1.min.js"></script>
        <script src="assets/js/jquery-migrate-3.0.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        <script src="assets/js/jquery.backstretch.min.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/jquery.waypoints.min.js"></script>
        <script src="assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="assets/js/scripts.js"></script>
      </body>
    </html>
  );
}

export default Home;

import React from 'react';

const Header = () => {
  const logoUrl = "https://github.com/srivatsa2005/mainproject/blob/main/Black%20logo%20for%2B%20print.png?raw=true";

  return (
    <header>
      <div style={{ display: 'flex' }}>
        <img id="logo" src={logoUrl} alt="Company Logo" />
        <ul type="none" style={{ display: 'flex', marginTop: 12 }}>
          <li>Home</li>
          <li>About us</li>
          <li>
            <select tabindex="1">
              <option selected>Products</option>
              <option>Rhyno SE03 Lite</option>
              <option>Rhyno SE03</option>
              <option>Rhyno SE03 Max</option>
            </select>
          </li>
          <li>Contact us</li>
          <li>Pre-book now</li>
        </ul>
      </div>
    </header>
  );
};

const Footer = () => {
  const logoUrl = 'https://github.com/srivatsa2005/mainproject/blob/main/Black%20logo%20for%2B%20print.png?raw=true';

  return (
    <footer>
      <img id="logo1" src={logoUrl} alt="Company Logo" />
      <p id="logotxt">Elevate your ride Experence<br/> using Rhyno.ev</p>
      <ul id="bottomul">
        <li>Privacy policy</li>
        <li>Refund policy</li>
        <li>Website policy</li>
        <li>Career</li>
        <li>Rentals</li>
      </ul>
      <ul id="bottomul1" type="none">
        <p id="product">Products :</p>
        <li>Rhyno SE03 Lite</li>
        <li>Rhyno SE03 Max</li>
        <li>Rhyno SE03 </li>
      </ul>
      <div id="bottomul2">
        <p id="fu">Follow us :</p>
        {/* <i id="fi" class="fa-brands fa-facebook"></i> */}
        {/* <i id="fi" class="fa-brands fa-instagram"></i> */}
        {/* <i id="fi" class="fa-brands fa-linkedin"></i> */}
      </div>
      <div id="contactbox">
        <h1 className="cs">Contact us :</h1>
        <p id="contact">Email : <a style={{ color: 'rgb(102, 102, 230)' }} href="info@rhyno.in">info@rhyno.in</a></p>
        <p id="contact">Mobile no : +91-9023987528</p>
        <p id="contact">Location :  Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
          Raisan, Gandhinagar, Gujarat, India.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      {/* Your main content here */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default App;
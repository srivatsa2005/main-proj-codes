import React, { useState, useEffect } from 'react';
import logo from './Black logo for B&W print.png';
const Header = () => {
  
  return (
    <header>
      <div style={{ display: 'flex' }}>
        <img id="logo" src={logo} alt="Company Logo" />
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

const ChangeLastWord = () => {
  const [sentence, setSentence] = useState("Let's Elevate Your Ride Experience With Rhyno  Where Superiority Meets Style.");
  const newWords = ['Elegance.', 'Minimalism.', 'Comfort.'];
  let wordIndex = 0;

  const changeWord = () => {
    const words = sentence.split(' ');
    words[words.length - 1] = newWords[wordIndex];
    const newSentence = words.join(' ');
    setSentence(newSentence);
    wordIndex = (wordIndex + 1) % newWords.length;
  };

  useEffect(() => {
    const intervalId = setInterval(changeWord, 2000); // Change every 2 seconds
    return () => clearInterval(intervalId); 
  });

  return (
    <div>
      <p className='changetext'>{sentence}</p>
    </div>
  );
};

const Products = () => {
    const [bikeColor, setBikeColor] = useState('none'); 
  
    const handleColorChange = (color) => {
      setBikeColor(color); 
    };
  return (
    <div id="bike">
    <nav>
      <img id="brand" src={logo} alt="Brand Logo" />
    </nav>
    <h2 id="bikename">Rhyno</h2>
    <h1 id="model">SE03</h1>
    <p id="bikeinf">
      Indulge in the perfect harmony of power and range with this Rhyno. Offering an<br />
      exhilarating experience with its robust 2000W motor, it ensures a thrilling ride<br />
      while still delivering an impressive 80-100km range on a single charge. Like<br />
      its counterparts, this machine features the safety assurance of a fire-safe<br />
      advanced LFP battery, along with the comprehensive benefits of owning a Rhyno.<br />
      Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this<br />
      beast is ready to roar on the roads, providing an electrifying journey at every<br />
      turn. Check out the other details below!
    </p>
    <h3 id="clr">Choose your colour</h3>
    <div className="colorselect">
      <div id="red" onClick={() => handleColorChange('red')} /> 
      <div id="blue" onClick={() => handleColorChange('blue')} />
      <div id="black" onClick={() => handleColorChange('black')} />
    </div>
    <button id="bnow">Buy Now !</button>
    {bikeColor !== 'none' && ( 
      <div
        style={{ backgroundImage: `url(bike_${bikeColor}.png)` }}
        className="bike-image" 
      />
    )}
  </div>
);
};

const Footer = () => {

  return (
    <footer>
      <img id="logo1" src={logo} alt="Company Logo" />
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
        <p id="contact">Location : Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
          Raisan, Gandhinagar, Gujarat, India.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header /> {/* Header component */}
      <ChangeLastWord /> {/* Frontline component */}
      <Products />{/* Products component */}
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default App;

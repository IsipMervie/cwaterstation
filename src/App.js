import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State variables to manage form inputs
  const [walkIn, setWalkIn] = useState(0);
  const [deliveryResidential, setDeliveryResidential] = useState(0);
  const [deliveryReseller, setDeliveryReseller] = useState(0);
  const [bottle6, setBottle6] = useState(0);
  const [bottle8, setBottle8] = useState(0);
  const [result, setResult] = useState('');

  // Function to calculate net income
  const calculateNetIncome = () => {
    const walkInPrice = 25;
    const deliveryResidentialPrice = 30;
    const deliveryResellerPrice = 25;
    const bottle6Price = 6;
    const bottle8Price = 8;

    const totalWalkInIncome = walkInPrice * walkIn;
    const totalDeliveryResidentialIncome = deliveryResidentialPrice * deliveryResidential;
    const totalDeliveryResellerIncome = deliveryResellerPrice * deliveryReseller;
    const totalBottle6Income = bottle6Price * bottle6;
    const totalBottle8Income = bottle8Price * bottle8;

    const netIncome = totalWalkInIncome + totalDeliveryResidentialIncome + totalDeliveryResellerIncome + totalBottle6Income + totalBottle8Income;

    setResult(`Net Income: ${netIncome}`);
  };

  // Function to clear all form fields
  const clearFields = () => {
    setWalkIn(0);
    setDeliveryResidential(0);
    setDeliveryReseller(0);
    setBottle6(0);
    setBottle8(0);
    setResult('');
  };

  return (
    <div className="container">
      <header>
        <h1>Melinroe Water Station Ordering System</h1>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>Welcome to Melinroe Water Station! We are committed to providing high-quality water refilling services to our customers.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Walk-in refilling</li>
            <li>Delivery for residential customers</li>
            <li>Delivery for reseller customers</li>
            <li>Available bottle sizes: 350 ml and 500 ml</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Address: 28, Muzon, Colgante, Apalit, Pampanga</li>
            <li>Phone: 09097314700</li>
            <li>Email: melinrowaterstation@gmail.com</li>
          </ul>
        </section>
        <form id="waterForm">
          <div className="input-group">
            <label htmlFor="walkIn">Walk In:</label>
            <input
              type="number"
              id="walkIn"
              value={walkIn}
              onChange={(e) => setWalkIn(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="deliveryTypeResidential">Delivery Type Residential:</label>
            <input
              type="number"
              id="deliveryTypeResidential"
              value={deliveryResidential}
              onChange={(e) => setDeliveryResidential(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="deliveryTypeReseller">Delivery Type Reseller:</label>
            <input
              type="number"
              id="deliveryTypeReseller"
              value={deliveryReseller}
              onChange={(e) => setDeliveryReseller(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="bottle6">Bottle 350 ml:</label>
            <input
              type="number"
              id="bottle6"
              value={bottle6}
              onChange={(e) => setBottle6(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="bottle8">Bottle 500 ml:</label>
            <input
              type="number"
              id="bottle8"
              value={bottle8}
              onChange={(e) => setBottle8(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={calculateNetIncome} className="calculate-btn">
              Calculate
            </button>
            <button type="button" onClick={clearFields} className="clear-btn">
              Clear
            </button>
          </div>
        </form>
        <div id="result" className="result">{result}</div>
      </main>
    </div>
  );
};

export default App;

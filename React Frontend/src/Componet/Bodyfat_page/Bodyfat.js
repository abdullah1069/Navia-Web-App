import React, { useState, useEffect } from 'react';
import './Bodyfat.css';

function Bodyfat() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [waist, setWaist] = useState('');
  const [Neck, setNeck] = useState('');
  const [Hip, setHip] = useState('');
  const [weightInLb, setWeightInLb] = useState('');
  const [heightInInches, setHeightInInches] = useState('');
  const [bodyFatPercentage, setBodyFatPercentage] = useState(null);

  useEffect(() => {
    // Calculate body fat percentage whenever dependent values change
    if (age && weight && height && waist && Neck || Hip) {
      setWeightInLb(weight * 2.20462);
      setHeightInInches(height * 0.393701);
      calculateBodyFat();
    }
  }, [age, weight, height, waist,weightInLb,heightInInches,Neck,Hip]);

  const calculateBodyFat = () => {
    if (age && weight && height && waist) {
      if (gender === 'male') {
        const bodyFatCal = 49.5 - (10.226 * Math.log10(weightInLb)) + (0.332 * Math.log10(heightInInches)) - (0.218 * Math.log10(waist)) + (0.127 * Math.log10(Neck));
        setBodyFatPercentage(Math.floor(bodyFatCal));
      } else {
        const bodyFatCalFe = 49.5 - (17.059 * Math.log10(weightInLb)) + (0.636 * Math.log10(heightInInches)) + (0.081 * Math.log10(waist)) + (0.465 * Math.log10(Hip));
        setBodyFatPercentage(Math.floor(bodyFatCalFe));
      }
    }
  }
  return (
    <div className="body-fat-calculator">
      <div className="header">
        <h1>Body Fat Percentage Calculator</h1>
      </div>
      <div className="form">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} min="1" placeholder="Enter your age" />
        <br />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label htmlFor="weight">Weight (in kg):</label>
        <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} min="1" placeholder="Enter your weight" />
        <br />
        <label htmlFor="height">Height (in cm):</label>
        <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} min="1" placeholder="Enter your height" />
        <br />
        <label htmlFor="waist">Waist (in inches):</label>
        <input type="number" id="waist" name="waist" value={waist} onChange={(e) => setWaist(e.target.value)} min="1" placeholder="Enter your middle waist" />
        <br />
        {
        gender === 'male' ?
        ( <div>
        <label htmlFor="waist">Neck (in inches):</label>
        <input type="number" id="waist" name="Hip" value={Neck} onChange={(e) => setNeck(e.target.value)} min="1" placeholder="Enter your neck in Inches" />
        <br />
        </div>)
        :
        (<div>
          <label htmlFor="waist">Hip (in inches):</label>
          <input type="number" id="waist" name="Hip" value={Hip} onChange={(e) => setHip(e.target.value)} min="1" placeholder="Enter your lower waist" />
          <br />
          </div>)
        }
        <button type="button" onClick={calculateBodyFat}>Calculate</button>
      </div>
      {bodyFatPercentage === null ?
      (
      <div>
        
      </div>
      )
      :
      (
      <div className="results">
      <p>
        Body Fat Percentage: <span id="body-fat-percentage">{bodyFatPercentage} %</span>
      </p>
      </div>
      )}
    </div>
  );
}

export default Bodyfat;

import React, { useState } from 'react';
import './Bmr.css';

function Bmr() {
  const [totalCalories, setTotalCalories] = useState('');

  function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;

    let bmr;

    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 44.755 + (9.247 * weight) + (3.098 * height) - (4.334 * age);
    }

    let calorieMultiplier;

    switch (activity) {
      case 'sedentary':
        calorieMultiplier = 1.2;
        break;
      case 'lightly active':
        calorieMultiplier = 1.375;
        break;
      case 'moderately active':
        calorieMultiplier = 1.55;
        break;
      case 'very active':
        calorieMultiplier = 1.725;
        break;
      case 'extremely active':
        calorieMultiplier = 1.9;
        break;
    }

    const totalCalories = (bmr * calorieMultiplier).toFixed(2);
    setTotalCalories(totalCalories);
  }

  return (
    <div className="calorie-calculator">
      <div className="header">
        <h1>Calorie Calculator</h1>
      </div>
      <div className="form">
          <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" min="1" />
              <br />
            <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
              <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
            <br />
              <label htmlFor="weight">Weight:</label>
                <input type="number" id="weight" name="weight" min="1" />
              <br />
            <label htmlFor="height">Height:</label>
          <input type="number" id="height" name="height" min="1" />
          <br />
          <label htmlFor="activity">Activity:</label>
          <select id="activity" name="activity">
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="lightly active">Lightly active (light exercise or sports 1-3 days per week)</option>
                <option value="very active">Very active (hard exercise or sports 6-7 days per week)</option>
                <option value="extremely active">Extremely active (very hard exercise or physical job or sports)</option>
                <option value="moderately active">Moderately active (moderate exercise or sports 3-5 days per week)</option>
          </select>
          <br />
            <button type="button" onClick={calculateCalories}>Calculate</button>
      </div>
      <div className="results">
        <p>Total Calories: <span id="total-calories">{totalCalories}</span></p>
      </div>
    </div>
  );
}

export default Bmr;

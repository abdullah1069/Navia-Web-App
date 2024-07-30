import React from 'react';
import './Col.css';
import { Link } from 'react-router-dom';

function Col() {
  return (
    <>
    <div className="col">
        <h1>About us</h1>
        <Link to="/work"><p>Workout plan</p></Link>
        <Link to="/bmr"><p>BMR</p></Link>
        <Link to="/bodyfat"><p>Bodyfat</p></Link>
        <Link to="/nutri"><p>Nutrition</p></Link>
    </div>
    </>
  )
}
export default Col;
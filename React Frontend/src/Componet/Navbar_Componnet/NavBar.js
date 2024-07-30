import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

function NavBar() {
  return (
    <>
        <div className="Navbar">
            <div className="leftNav" >
                <h1>
                    NAIVA
                </h1>
            </div>
            <div className="rightNav">
                <Link to="/">Home</Link>
                <Link to="/work">Workout Plan</Link>
                <Link to="/bmr">BMR</Link>
                <Link to="/bodyfat">BodyFat</Link>
                <Link to="/nutri">Nutrition</Link>
                {/* <Link to="/contact">About us</Link> */}
            </div>
        </div>
    </>
  )
}
export default NavBar;

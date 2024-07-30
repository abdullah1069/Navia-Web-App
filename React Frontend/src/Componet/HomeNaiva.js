import React from 'react';
import homepage_img from './Images/homepage_img.png';
import homeimg from './Images/img3.jpg';
import Visittab from './Naivatabs_componnet/Visittab';
import './HomeNaiva.css';

function HomeNaiva() {
  return (
    <>
      <div className='home_container'>
        <div className='home_text'>
          <h1 className='name'>NAIVA</h1>
          <p className='summar'>
            Naiva is a health and fitness tool that will help you discover the freshness of your food and provide a customized workout plan tailored to your specific needs.
          </p>
        </div>
        <img src={homeimg} alt='' className='home_img' />
      </div>
      <div className="Visit_box">
        <Visittab tablink="/work" tabname="Workout Plan" linkdesc="Find best training split for yourself"/>
        <Visittab tablink="/bmr" tabname="BMR Calculator" linkdesc="Find out how much calories you need"/>
        <Visittab tablink="bodyfat" tabname="Bodyfat " linkdesc=" Find out your bodyfat percentage"/>
        <Visittab tablink="/nutri" tabname="Nutrition Fact" linkdesc="Find out what are you eating"/>
      </div>
    </>
  );
}

export default HomeNaiva;

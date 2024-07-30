import React from 'react';
import './Footer.css';
import Col from './col_componnet/Col'

function Footer() {
  return (
    <div className='footer_container'>
        <div className="info">
          <h1 className="ft_naiva">Naiva</h1>
          <p>Naiva is a health and fitness tool that will help you discover the 
            freshness of your food and provide a customized workout plan tailored 
            to your specific needs.</p>
        </div>
        <Col/>
        <Col/>
        <Col/>
        
    </div>
  )
}
export default Footer;
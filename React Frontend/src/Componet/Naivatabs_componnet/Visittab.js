import React from 'react';
import './visittab.css';
import {Link} from "react-router-dom";

function Visittab(props) {
  return (
   <> 
        <div className="tab">
             <Link className="link" to={props.tablink}><h1>{props.tabname}</h1></Link>
             <p className='tabtxt'>{props.linkdesc}</p>
        </div>
    
        
    </>
  )
}
export default  Visittab;
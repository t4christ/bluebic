import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './header.js';
import '../assets/thankyou.css';

class ThankYou extends Component {
  render() {
    return (
      <div className="thankyou">
    <Header/>

      <div className="thank-logo">
      <div className="thank-vector">
      <i style={styles.fa_lightstyle} className="fas fa-check"></i>
      </div>
      </div>

<div style={styles.midwrapper}>
    <h2 className="t-heading">Thank you</h2>
    <p className="t-paragraph">You have submitted your first book review. Now it's time to make some friends.</p>

<Link to="/book_review">
      <button style={{width:"100%"}} className="b-signup waves-effect waves-light btn">ADD FRIENDS</button>
      </Link>
</div>


    </div>
    );
  }
}

const styles ={
  fa_lightstyle:{
    fontSize: '4.1rem',
    marginTop: '-3%',
    marginLeft: '19px',
    color: 'white',
  },
  midwrapper:{
    marginTop:'20%',
    width:'50%',
    marginLeft:'auto',
    marginRight:'auto'
  },
signup:{
fontFamily: 'Circular Std',
fontSize: '16px',
lineHeight: 'normal',
textAlign: 'center',
color: '#445984',
},



}


export default ThankYou;

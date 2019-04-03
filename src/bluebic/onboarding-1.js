import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../assets/onboard1.css';

class OnboardingOne extends Component {
  render() {
    return (
      <div className="onboarding-1">
      <div className="ellipse"></div>
      <div className="ellipse-2"></div>
    

      <div className="book-logo">
      <div className="vector">
      <i style={styles.fa_bookstyle} className="fas fa-book-open"></i>
      </div>
      </div>

<div style={styles.midwrapper}>
    <h2 className="read-book">Read Books</h2>
    <p className="g-started">Create your account to get started. After that, you can share book and make friends.</p>

    <div style={styles.arrow_wrapper}>
      <div className="pre-arrowwrap"></div>
      <Link to="/onboarding-2">
      <div className="arrow-wrap"><i style={styles.fa_arrowstyle} className="fas fa-arrow-right"></i></div>
      </Link>
    </div>

    <p className="skip-intro">Skip Intro</p>
    </div>
    </div>
    );
  }
}

const styles ={
  fa_bookstyle:{
    fontSize: '4.1rem',
    marginTop: '-16%',
    marginLeft: '5.5px',
    color: 'lightgrey',
  },
  fa_arrowstyle:{
    fontSize: '2rem',
    margin: '0.6rem',
    color: 'white',
  },
  midwrapper:{
    marginTop:'20%',
    width:'50%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  arrow_wrapper:{
    display:'flex'
  }
}


export default OnboardingOne;

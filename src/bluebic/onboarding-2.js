import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../assets/onboard2.css';

class OnboardingTwo extends Component {
  render() {
    return (
      <div className="onboarding-2">
      <div className="ellipse"></div>
      <div className="ellipse-2"></div>
    

      <div className="star-logo">
      <div className="star-vector">
      <i style={styles.fa_starstyle} className="fas fa-star"></i>
      </div>
      </div>

<div style={styles.midwrapper}>
    <h2 className="read-book">Review Them</h2>
    <p className="g-started">Create your account to get started. After that, you can share book and make friends.</p>

    <div style={styles.arrow_wrapper}>
      <div className="pre-arrowwrap"></div>
      <Link to="/signup">
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
  fa_starstyle:{
    fontSize: '4.1rem',
    marginTop: '-16%',
    marginLeft: '3px',
    color: 'white',
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


export default OnboardingTwo;

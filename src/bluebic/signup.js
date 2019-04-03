import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../assets/signup.css';

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
      <div className="ellipse"></div>
      <div className="ellipse-2"></div>
    

      <div className="signup-logo">
      <div className="signup-vector">
      <i style={styles.fa_lightstyle} className="fas fa-lightbulb"></i>
      </div>
      </div>

<div style={styles.midwrapper}>
    <h2 className="s-heading">Welcome!</h2>
    <p className="s-paragraph">Create your account to get started. After that, you can share book and make friends.</p>



{/********************************** Form Section ***************************************/}
<div className="row">

    <form className="col m10 offset-m1">

      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">EMAIL</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label for="password">PASSWORD</label>
        </div>
      </div>

        <div className="row">
        <div className="input-field col s12">
          <input id="password_again" type="password" className="validate"/>
          <label for="password_again">TYPE PASSWORD AGAIN</label>
        </div>
      </div>
      <Link to="/thank_you">
      <button style={{width:"100%"}} className="b-signup waves-effect waves-light btn">SIGN UP</button>
      </Link>

    <p style={styles.signup}>Already have an account? Login</p>
    </form>
  </div>

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


export default SignUp;

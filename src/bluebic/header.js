import React, { Component } from 'react';
import '../assets/search.css';

class Header extends Component {
  render() {
    return (
        <nav style={styles.nav_style}>
        <div class="nav-wrapper">
        

          <a href="#!" class="brand-logo"><img className="logo" src="https://www.bluebic.com/assets/logo.svg" alt="bluebic"/></a>
          
  

          <ul class="right hide-on-med-and-down">

      
         <li>
                {/****************** Search Form  ****************/}
     
                <form className="md2">
        <div className="input-field md2">
          <input id="search" className="md2" type="search" required />
          <label className="label-icon" for="search"><i class="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
         </li>
      
      
            <li><a href="sass.html">Timeline</a></li>
            <li><a href="badges.html">My Books</a></li>
            <li><a href="badges.html">Add Review</a></li>
            <li><a href="badges.html">Notifications</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const styles ={
  nav_style:{
    background:'#00D23A',
  },
logo_style:{
    width:"50px",
    height:"50px",
}
}


export default Header;














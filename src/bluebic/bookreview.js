import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './header.js';
import '../assets/bookreview.css';
import {Row} from 'react-materialize';

class BookReview extends Component {
  render() {
    return (
      <div className="book_review">
      <Header/>
<h2 className="br-heading">BOOKS REVIEWED BY YOU</h2> 

<Row>
   

<div  class="col m4">
    
    <div style={styles.cardStyle} class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6" alt="bluebic"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h2 className="br-heading">Remote: Office Not Required</h2>
          <p className="br-paragraph">Jason fried</p>
          <div style={{textAlign:'center'}}>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={{color:'grey'}} className="fas fa-star"></i>
          </div>
        </div>
        <div class="card-action">
          
        </div>
      </div>
    </div>
  </div>

  <div  class="col m4">
    
    <div style={styles.cardStyle} class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/5" alt="bluebic"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h2 className="br-heading">Papillon</h2>
          <p className="br-paragraph">Henri Charriere</p>
          <div style={{textAlign:'center'}}>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={{color:'grey'}} className="fas fa-star"></i>
          </div>
        </div>
        <div class="card-action">
          
        </div>
      </div>
    </div>
  </div>


  <div  class="col m4">
    
    <div style={styles.cardStyle} class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/4" alt="bluebic"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h2 className="br-heading">The Dark Tower: The Gunslinger</h2>
          <p className="br-paragraph">Steven King</p>
          <div style={{textAlign:'center'}}>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={{color:'grey'}} className="fas fa-star"></i>
          </div>
        </div>
        <div class="card-action">
          
        </div>
      </div>
    </div>
  </div>


<div style={{marginTop:"3%"}} className="col m12">
<div className="col m4 offset-m4">
<Link to="/add_book_review">
      <button style={{width:"100%"}} className="b-signup waves-effect waves-light btn">ADD BOOK REVIEW</button>
      </Link>
      </div>
      </div>
</Row>


    </div>
    );
  }
}

const styles ={
  cardStyle:{
      height:'200px'
  },
  fa_starstyle:{
      color:'darkorange',
  }




}


export default BookReview;

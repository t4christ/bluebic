import React, { Component } from 'react';
import Header from './header.js';
import '../assets/addbookreview.css';
import {Row} from 'react-materialize';

class AddBookReview extends Component {
  render() {
    return (
      <div className="book_review">
      <Header/>
<h2 style={{textAlign:'center'}} className="abr-heading">ADD BOOK REVIEW</h2> 

<Row>
   

<div  class="col m4 offset-m4">
    
    <div  class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6" alt="bluebic"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h2 className="abr-heading">Pet Sematary</h2>
          <p className="abr-paragraph">
          <i style={{color:'grey'}} className="fas fa-star"></i>Stephen King</p>
        <p className="abr-paragraph">2,464 Reviews</p>
        </div>
        <div class="card-action">
          <p className="abr-paragraph">Sometimes dead is better... When the Creeds move into beautiful old house
          in rurual Maine. It all seems too good to be true: physician father, beautiful wife, charming little
          daughter, adorable infant son - and now an idyllic home...</p>

          <p className="full-synopsis">Full Synopsis</p>
        </div>
      </div>
    </div>
  </div>



<div style={{marginTop:"3%"}} className="col m12">
<div className="col m4 offset-m4">
<h2 style={{textAlign:'center',marginBottom:'0'}} className="abr-heading">TAP TO ADD RATING</h2>

          <div style={{textAlign:'center'}}>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={styles.fa_starstyle} className="fas fa-star"></i>
          <i style={{color:'grey'}} className="fas fa-star"></i>
          </div>

      <button style={{width:"100%",marginTop:'10%'}} className="b-signup waves-effect waves-light btn">NEXT</button>

      </div>
      </div>
</Row>


    </div>
    );
  }
}

const styles ={

  fa_starstyle:{
      color:'darkorange',
  }




}


export default AddBookReview;

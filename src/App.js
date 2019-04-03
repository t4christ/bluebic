import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import OnboardingOne from './bluebic/onboarding-1';
import OnboardingTwo from './bluebic/onboarding-2';
import SignUp from './bluebic/signup';
import ThankYou from './bluebic/thankyou';
import BookReview from './bluebic/bookreview';
import AddBookReview from './bluebic/addbookreview';
import NotFound from './bluebic/notfound';

class App extends Component {
  render() {
    return (



                        <Router>
                            <div>
                                
                        <Switch>
                              
                                <Redirect exact from="/" to="/onboarding-1"/>
                                <Route exact path="/onboarding-1" component={OnboardingOne} />
                                <Route  path="/onboarding-2" component={OnboardingTwo} />
                                <Route  path="/signup" component={SignUp} />
                                <Route  path="/thank_you" component={ThankYou} />
                                <Route  path="/book_review" component={BookReview} />
                                <Route  path="/add_book_review" component={AddBookReview} />
                                <Route component={NotFound} />
                                </Switch>
                            </div>
                        </Router>
                 
    
  )
}
}






export default App;

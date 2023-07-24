import './App.css';
/*
import Hero from './components/Hero/Hero';
import Membership from './components/Membership/Membership';
import Amenities from "./components/Amenitites/Amenities";
import Classes from "./components/Classes/Classes"
import Testimonials from './components/Testimonials/Testimonials';
import Trainer from './components/Trainer/Trainer';*/
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Clubs from "./components/Clubs/Clubs"
import Classes from "./components/ClassCategories/C_Categories"
import Strength from "./components/ExploreClasses/Strength/Strength"
import Aqua from "./components/ExploreClasses/Aqua/Aqua"
import Cardio from "./components/ExploreClasses/Cardio/Cardio"
import Cycling from "./components/ExploreClasses/Cycling/Cycling"
import Dance from "./components/ExploreClasses/Dance/Dance"
import Mb from "./components/ExploreClasses/Mind&Body/Mb"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  
  return (

  <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>

          <Route exact path = "/clubs">
            <Clubs/>
          </Route>

          <Route exact path = "/classes">
            <Classes/>
          </Route>

          <Route exact path = "/classes/aqua">
            <Aqua/>
          </Route>

          <Route exact path = "/classes/cardio">
            <Cardio/>
          </Route>

          <Route exact path = "/classes/cycling">
            <Cycling/>
          </Route>

          <Route exact path = "/classes/dance">
            <Dance/>
          </Route>

          <Route exact path = "/classes/mb">
            <Mb/>
          </Route>

          <Route exact path = "/classes/strength">
            <Strength/>
          </Route>

        </Switch>
      </div>
      
    </div>
  </Router>

    
   
  );
}

export default App;

{/*


const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

<div>
      <p>Visit codingbeautydev.com in a new tab</p>

      <button
        role="link"
        onClick={() => window.open('https://google.com', "_self")}
      >
        Visit
      </button>
    </div>


*/}
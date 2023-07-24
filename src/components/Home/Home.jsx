import Hero from './Hero/Hero';
import Membership from './Membership/Membership';
import Amenities from "./Amenitites/Amenities";
import Classes from "./Classes/Classes"
import Testimonials from './Testimonials/Testimonials';
import Trainer from './Trainer/Trainer';
//import Navbar from "./components/Navbar/Navbar"


function Home() {
    return (
      <div className='home' id = "Home">
       {/* <Navbar/>*/}
        <Hero/>
        <Amenities/>
        <Classes/>
        <Trainer/>
        <Membership/>
        <Testimonials/>
      </div>
    )
  }
  
  export default Home
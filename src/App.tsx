
import './App.css'
import NavBar from './component/navBar';
import Section from './component/section';
import OfferSection from './component/offerSection';
import InfoCoffee from './component/infoCoffee';
import LocationsCof from './component/locationsCof';
import ContactInfo from './component/contactInfo';


const App = () => { 

  return (
  <div className="min-h-screen">
    
    <NavBar />
    <Section />
    <OfferSection />
    <LocationsCof />
    <InfoCoffee />
    <ContactInfo />
    

  </div>
  )
}

export default App

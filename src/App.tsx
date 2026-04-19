
import './App.css'
import NavBar from './component/navBar';
import Section from './component/section';
import OfferSection from './component/offerSection';
import InfoCoffee from './component/infoCoffee';
import ContactInfo from './component/contactInfo';
import { useState } from 'react';
import Locationsinfo from './component/locationsinfo';
import myJsonData from './data/dataIngrediant.json'

interface Branch {
    city: string
    description: string
}

const App = () => { 
  const [listOffers, setListOffers] = useState<number>(0)
  const [centerIndex, setCenterIndex] = useState<number>(0)

  const currentBranches: Branch[] = (myJsonData as any)[listOffers]?.details[centerIndex]?.branches ?? [];

  return (
  <div className="min-h-screen">
    
    <NavBar />
    <Section />
    <OfferSection
        listOffers={listOffers}
        setListOffers={setListOffers}
        centerIndex={centerIndex}
        setCenterIndex={setCenterIndex}
    />
    <Locationsinfo branches={currentBranches} />
    <InfoCoffee />
    <ContactInfo />
    

  </div>
  )
}

export default App

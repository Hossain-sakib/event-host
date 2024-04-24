import './App.css'
import Attendees from './Components/Attendees/Attendees'
import Banner from './Components/Banner/Banner'
import Events from './Components/Events/Events'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Ticketing from './Components/Ticketing/Ticketing'

function App() {

  return (
    <>
      <div className='max-w-screen-xl mx-auto'>
       <Navbar></Navbar>
       <Banner></Banner>
       <Events></Events>
       <Features></Features>
       <Attendees></Attendees>
       <Ticketing></Ticketing>
       <Footer></Footer>
      </div>
    </>
  )
}

export default App

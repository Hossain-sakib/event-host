import './App.css'
import Banner from './Components/Banner/Banner'
import Events from './Components/Events/Events'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='max-w-screen-xl mx-auto'>
       <Navbar></Navbar>
       <Banner></Banner>
       <Events></Events>
      </div>
    </>
  )
}

export default App

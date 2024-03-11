import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import RoomsSuites from './Components/RoomsSuites';
import Dining from './Components/Dining';
import Instagram from './Components/Instagram';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <RoomsSuites/>
     <Dining/><br/><br/>
     <Instagram/>
     <Footer/>
    </div>
  );
}

export default App;

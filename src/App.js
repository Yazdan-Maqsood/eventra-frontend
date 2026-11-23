import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import EventCards from './pages/EventCards.jsx';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.jsx';

function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<EventCards/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

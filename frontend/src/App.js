import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TeamName} from './pages/TeamName';
import Teams from './pages/Teams';
import Header from './components/Header';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Header text={'Pokemon Team Builder'} textColor={'#000'} bgColor={`#efefef`} />
      <main>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/teams/' element={<Teams />} />
          <Route path='/teams/:id' element={<TeamName />} />
          <Route path='/pokedex/' element={<Pokedex />} />
          <Route path='/pokedex/:pokedex' element={<Pokemon />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
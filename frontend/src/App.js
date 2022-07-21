import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teams from './pages/Teams';
import Header from './components/Header';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import TeamName from './pages/TeamName';
import TeamNotAdded from './pages/TeamNotAdded';


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
<<<<<<< HEAD
          <Route path='/*' element={<Home />} />
=======
          <Route path='/create/team' element={<TeamName />} />
          <Route path='/team-not-added' element={<TeamNotAdded />} />
          <Route path='/*' element={<NotFound />} />
>>>>>>> ad75d2bbffe8fec790f3d7083fdcbc4ecd1fe71b
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
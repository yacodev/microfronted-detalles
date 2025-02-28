import { Routes, Route } from 'react-router-dom';
import PokemonDetails from '../pages/PokemonDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PokemonDetails />} />
    </Routes>
  );
};

export default AppRoutes;

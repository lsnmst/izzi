import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ojiiji from './pages/Ojiiji';
import Otutara from './pages/Otutara';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/Ojiiji" index element={<Ojiiji />} />
          <Route path="/Otutara" index element={<Otutara />} />
       </Routes>
    </>
 );
};

export default App;

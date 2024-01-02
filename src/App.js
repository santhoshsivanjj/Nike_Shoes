import NavBar from './components/NavBar.js';
import Filters from './components/Filter.js';
import Products from './Pages/Products.js'
import { useState } from 'react';


function App() {

  const [appliedFilters, setAppliedFilters] = useState({});

  const applyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  return (
    <>
      <NavBar />
      <Filters applyFilters={applyFilters} />
      <Products appliedFilters={appliedFilters} />
    </>
  );
}

export default App;

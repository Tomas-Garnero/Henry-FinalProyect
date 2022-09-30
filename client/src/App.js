import "./App.css";
import { Route, Routes } from "react-router-dom";
import Adoption from "./User/Features/Form/Adoption.jsx";
import AltaAdoption from "./User/Features/Form/AltaAdoption.jsx";
import HomeProducts from "./User/Views/ProductHome/ProductHome.jsx";
import HomeAnimals from "./User/Views/AnimalHome/AnimalHome.jsx";
import ProductDetailsContainer from "./User/Views/ProductDetails/ProductDetailsContainer";
import AnimalDetailsContainer from "./User/Views/AnimalDetails/AnimalDetailsContainer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home/products" element={<HomeProducts />}/>
        <Route exact path="/home/animals" element={<HomeAnimals />}/>
        <Route exact path="/home/products/:id" element={<ProductDetailsContainer />}/>
        <Route exact path="/home/animals/:id" element={<AnimalDetailsContainer />}/>
        <Route exact path="/home/animals/:id/adoption" element={<Adoption />}/>
        <Route exact path="/home/altaadoption" element={<AltaAdoption />}/>
        <Route path="*" element={<main><p>The searched route was not found</p></main>}/>
      </Routes>
    </div>
  );
}

export default App;

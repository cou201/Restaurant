import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyled}from "./GlobalStyled";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {ProductData, ProductDataTwo} from "./components/Products/Data";
import Feature from "./components/Feature/index";
function App() {
  return (
    <Router>
      <GlobalStyled/>
     <Hero />
     <Products heading= "Escoje tus favoritos" data={ProductData}/>
     <Feature/>
     <Products heading="Escoje tu postre favorito" data={ProductDataTwo}/>
    </Router>
  );
}

export default App;

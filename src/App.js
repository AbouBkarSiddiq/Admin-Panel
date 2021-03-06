import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import CatForm from './pages/CatForm';
import Products from './pages/Products/index';
import Home from './pages/Home/index';
import ProductsForm from "./pages/ProductsForm/index";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/categories/:name"} exact component={Products} />
        <Route path="/catForm" component={CatForm} />
        <Route path="/ProductsForm" component={ProductsForm} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}
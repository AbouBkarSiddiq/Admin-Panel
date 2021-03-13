import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../Components/Navbar/index';
import CategoryForm from "../Components/Forms/CategoryForm";
import Products from '../pages/Products/index';
import Category from '../pages/Category/index';
import ProductsForm from "../Components/Forms/productsForm";
import CategoryEditForm from "../pages/CategoryEditForm";
import ProductsEditForm from "../pages/ProductsEditForm";
import Login from "../Components/Forms/login";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Login} />
        <Route path={"/category"} exact component={Category} />
        <Route path={"/categories/:name"} exact component={Products} />
        <Route path="/catForm" component={CategoryForm} />
        <Route path="/ProductsForm" component={ProductsForm} />
        <Route path="/category/:name" component={CategoryEditForm} />
        <Route path="/categories/:catName/:name" component={ProductsEditForm} />
      </Switch>
    </Router>
  );
}
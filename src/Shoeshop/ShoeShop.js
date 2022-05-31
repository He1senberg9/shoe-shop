import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "./data.json";

export default class ShoeShop extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoe Shop</h1>
        <ProductList products={data} />
      </div>
    );
  }
}

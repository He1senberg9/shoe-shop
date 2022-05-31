import React, { Component } from "react";
import Modal from "./Modal";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
  }
  toggleDetail = () => {
    if (this.state.display === "none") {
      this.setState({ display: "block" });
    } else {
      this.setState({ display: "none" });
    }
  };

  render() {
    const product = this.props.product;
    return (
      <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">${product.price}</p>
          <button
            data-bs-toggle="button"
            onClick={this.toggleDetail}
            className="btn btn-success"
          >
            Detail
          </button>
          <div autoFocus="true" style={{ display: this.state.display }}>
            <Modal product={product} />
          </div>
        </div>
      </div>
    );
  }
}

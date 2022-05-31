import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {product} = this.props;
    return (
      <div>
        <p className='mt-3'>{product.description}</p>
        <span>Quantity: {product.quantity}</span>
      </div>
    )
  }
}

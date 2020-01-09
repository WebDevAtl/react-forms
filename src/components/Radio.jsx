import React, { Component } from 'react'

export default class Radio extends Component {
  render() {
    return (
      <div className='radio-buttons'>
        <label>
          <input
            type='radio'
            name='pickup-radio-button'
            className='radio-buttons'
            value='Pick Up'
            checked={true}
          />
            Pick Up
          <input
            type='radio'
            name='delivery-radio-button'
            className='radio-buttons'
            value='Delivery'
            checked={true}
          />
            Delivery
        </label>
      </div>
    )
  }
}

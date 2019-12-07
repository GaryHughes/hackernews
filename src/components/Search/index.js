// @ts-check
import React, { Component } from 'react';
import './index.css'

export class Search extends Component {

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value, 
      onChange,
      onSubmit, 
      children
    } = this.props;
    let input;
    return (
      <form onSubmit={onSubmit}>
        <input 
          type="test"
          value={value}
          onChange={onChange}
          ref={el => this.input = el } 
        />
        <button type="submit">
          {children}
        </button>
      </form>
    )
  }
}
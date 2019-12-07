// @ts-check
import React from 'react';
import './index.css'

export const Search = ({
    value, 
    onChange,
    onSubmit, 
    children
  }) =>
    <form onSubmit={onSubmit}>
      <input 
        type="test"
        value={value}
        onChange={onChange} 
      />
      <button type="submit">
        {children}
      </button>
    </form>
import React from 'react'
import './searchbox.styles.css'

export const SearchBox = ({ placeholder, changeHandler }) => (
   <input className='input'
      type='search'
      placeholder={placeholder}
      onChange={changeHandler} />
)

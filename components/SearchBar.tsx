"use client"

import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
import { manufacturers } from '@/constants'


const SearchBar = () => {

  const [manufacturer , setmanufacturer] = useState('')
  const handleSearch = () => {};

  return (
    <form className='searchbar'>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setmanufacturer={setmanufacturer} />
      </div>
    </form>
  )
}

export default SearchBar

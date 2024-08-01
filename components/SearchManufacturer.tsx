"use client"

import React, { useState, Fragment } from 'react'
import { SearchManufacturerProps } from "@/types"
import { Combobox, ComboboxButton, ComboboxInput, Transition } from '@headlessui/react'
import Image from 'next/image'


const SearchManufacturer: React.FC<SearchManufacturerProps> = ({manufacturer , setmanufacturer}) => {
  
  const [query, setQuery ] = useState('');
  
  return (
    <div className=''>
      <Combobox>
        <div className='relative w-full'>
          <ComboboxButton className="absolute top-[14px]">
            <Image src="/car-logo.svg" alt='Car Logo' width={20} height={20} className='ml-4' />
          </ComboboxButton>
          <ComboboxInput className="search-manufacturer__input" placeholder='VolksWagen'  displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)}/>
          <Transition as={Fragment} leave='Transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')} >

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer;

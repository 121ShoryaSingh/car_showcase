"use client"

import React, { useState, Fragment } from 'react'
import { SearchManufacturerProps } from "@/types"
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants'


const SearchManufacturer: React.FC<SearchManufacturerProps> = ({manufacturer , setmanufacturer}) => {
  
  const [query, setQuery ] = useState('');

  const filteredManufacturers = 
    query === "" 
    ? manufacturers : manufacturers.filter((item) => (
      item.toLowerCase()
      .replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))
  ))
  
  return (
    <div className='search-manufacturer'>
      <Combobox >
        <div className='relative w-full'>
          <ComboboxButton className="absolute top-[14px]">
            <Image src="/car-logo.svg" alt='Car Logo' width={20} height={20} className='ml-4' />
          </ComboboxButton>
          <ComboboxInput className="search-manufacturer__input" placeholder='VolksWagen'  displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)}/>
          <Transition as={Fragment} leave='Transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')} >
            <ComboboxOptions>
              {filteredManufacturers.map((item) => (
                <ComboboxOption key={item} className='relative search-manufacturer__option select-none data-[focus]:bg-primary-blue data-[focus]:text-white text-black'  value={item} > 
                  {item}
                </ComboboxOption>
              )
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer;

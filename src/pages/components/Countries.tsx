import { useEffect, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import ICountries from '../interfaces/ICountries'
// import { useFetch } from '../hooks/useSWR'

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Countries(props:any) {
  const [query, setQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<ICountries>({name: '', code:''});
  
  useEffect(() => {
    props.setCode(countryCode);
  });

  const countryCode = selectedCountry === undefined ? null : selectedCountry.code
  const countries = props.data || null;

  const filteredCountries =
    query === ''
      ? countries
      : countries.filter((country: any) => {
          return country.name.toLowerCase().includes(query.toLowerCase())
        })

    
  return (
    <>
        {countries === undefined ?  
            <div>No Data</div> :
            <Combobox as="div" value={selectedCountry} onChange={setSelectedCountry}>
                <Combobox.Label className="block text-sm font-medium text-gray-700">Countries</Combobox.Label>
                <div className="relative mt-1">
                    <Combobox.Input
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(country : any) => country?.name}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>
                    
                    {filteredCountries?.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredCountries.map((country: any) => (
                            <Combobox.Option
                                key={country.code}
                                value={country}
                                className={({ active }) =>
                                classNames(
                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                )
                                }
                            >
                                {({ active, selected }) => (
                                <>
                                    <span className={classNames('block truncate', selected && 'font-semibold')}>{country.name}</span>

                                    {selected && (
                                    <span
                                        className={classNames(
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                        active ? 'text-white' : 'text-indigo-600'
                                        )}
                                    >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    )}
                                </>
                                )}
                            </Combobox.Option>
                            ))}
                        </Combobox.Options>
                        )}
                </div>
            </Combobox> 
        } 
    </>
  )
}

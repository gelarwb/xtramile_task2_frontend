import { useEffect, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import ICities from '../interfaces/ICities'
import useSWR from "swr";
import * as api from '../api/weather';

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

  
// async function getCities(url:string) {
//     const resp = await fetch(url);
//     return resp.json();
// }


export default function Cities(props:any) {
    const [query, setQuery] = useState('')
    const [selectedCity, setselectedCity] = useState<ICities>({country: '', name:'', lat:'', lng:''})

    useEffect(() => {
        props.setName(cityName)
    });

    var cities = api.getCitiesByCountry(props.countryCode);
    
    const cityName = selectedCity === undefined ? null : selectedCity.name

    const filteredCities =
        query === ''
            ? cities
            : cities.filter((cities: any) => {
                return cities.name.toLowerCase().includes(query.toLowerCase())
                })

    return (
        <> 
            <Combobox as="div" value={selectedCity} onChange={setselectedCity}>
                <Combobox.Label className="block text-sm font-medium text-gray-700">Cities</Combobox.Label>
                <div className="relative mt-1">
                    <Combobox.Input
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(cities : any) => cities?.name}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>
                    
                    {filteredCities?.length > 0 ? (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredCities.map((cities: any) => (
                            <Combobox.Option
                                key={cities.id}
                                value={cities}
                                className={({ active }) =>
                                classNames(
                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                )
                                }
                            >
                                {({ active, selected }) => (
                                <>
                                    <span className={classNames('block truncate', selected && 'font-semibold')}>{cities.name}</span>

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
                    ) : (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <Combobox.Option
                                key="1"
                                value="No Data"
                                className={() =>
                                classNames(
                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                                }
                            >
                            No Data
                            </Combobox.Option>
                        </Combobox.Options>
                    ) } 
                </div>
            </Combobox> 
        </>
      )
}
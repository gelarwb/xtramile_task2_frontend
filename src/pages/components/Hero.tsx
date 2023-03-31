import Image from 'next/image'

// import { Button } from '@/components/Button'
import { Container } from './Container'
import backgroundImage from '../images/background.jpg'
import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Countries from './Countries'
import Weather from './Weather'
import Cities from './Cities'
import useSWR from "swr"
import * as api from '../api/weather'
import { Header } from './Header'

export function Hero() {
  const [countryCode, setCountryCode] = useState("");
  const [cityName, setCityName] = useState("");
  
  const countries = api.getCoutries();
  const weather =  api.getWeather(countryCode, cityName)
  
  function changeCountryCode(code:string) {
    setCountryCode(code);
  }

  function changeCityName(name:string) {
    setCityName(name);
  }

  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only"></span>Weather Map.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
                Access current weather data for any location on Earth including over 200,000 cities!
            </p>
            <small className='text-base'>
            This Weather Map used dummy data. There are only several cities that have Weather data. Use this country <b>Indonesia</b> and <b>Australia</b> to test. The following list of cities that have weather data:  <b>Jakarta</b>, <b>Bandung</b>, <b>Surabaya</b>, <b>Medan</b>, <b>Padang</b>, <b>Denpasar</b>, <b>Melbourne</b>, <b>Sydney</b>, <b>Brisbane</b>, <b>Perth</b>, <b>Darwin</b>, <b>Canberra</b>, and <b>Adelaide</b>.
            </small>
            <div>

        <div className="grid gap-4 grid-cols-2 grid-rows-1">
            <Countries data={countries} setCode={changeCountryCode}/>
            <Cities countryCode={countryCode} setName={changeCityName}/>
        </div>

      </div>
          </div>
          <Header cityName={cityName} />
          <Weather data={weather} />
        </div>
      </Container>
    </div>
  )
}

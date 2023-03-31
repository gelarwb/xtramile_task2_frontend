/* This example requires Tailwind CSS v2.0+ */
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import Empty from './Empty';
import { Header } from './Header'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Weather(props:any) {
  const weatherData = props.data;
  return (
    <div>
    {weatherData === undefined || weatherData.country === null ? <Empty/> :
      <dl className="mt-5 grid grid-cols-1 divide-x divide-dashed divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-y-0 md:divide-x">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Time</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {weatherData === undefined ? "" : weatherData.time}
              </div>
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Wind</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {weatherData === undefined ? "" : weatherData.wind} Km/h
              </div>
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Visibility</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {weatherData === undefined ? "" : weatherData.visibility} Km
              </div>
            </dd>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Sky Condition</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {weatherData === undefined ? "" : weatherData.sky_conditions}
              </div>
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Temperature</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {weatherData === undefined ? "" : weatherData.temperature_celcius}&#8451; / {weatherData === undefined ? "" : weatherData.temperature_fahrenheit}&#8451;
              </div>
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Dew Point</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {weatherData === undefined ? "" : weatherData.dew_point}&#8451;
              </div>
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Humidity</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {weatherData === undefined ? "" : weatherData.relative_humidity}
              </div>
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900 ">Pressure</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {weatherData === undefined ? "" : weatherData.pressure}
              </div>
            </dd>
          </div>
      </dl>
    }
    </div>
  )
}

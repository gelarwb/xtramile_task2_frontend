import useSWR from "swr";

const baseUrl = process.env.apiURL;

async function getData(url:string) {
    const resp = await fetch(url);
    return resp.json();
}


export const getCoutries = () => {
    const apiUrl = baseUrl + `/countries`;
    const {data} = useSWR(apiUrl, getData)
    return data;
}

export const getCitiesByCountry = (code: string) => {
    const apiUrl = baseUrl + `/country/${code}`
    const {data} = useSWR(apiUrl, getData)
    return data;
}

export const getWeather = (code: string, city:string) => {
    const apiUrl = baseUrl + `/city/${code}/${city}`;
    const {data} = useSWR(apiUrl, getData)
    return data;
}
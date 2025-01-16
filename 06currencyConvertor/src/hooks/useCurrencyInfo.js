import {useEffect, useState} from "react"

//creating custom hook with a parameter, this hook will return a data
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    //whenever this hook is loaded, the api should be called, for this we will use useEffect
    //useEffect requres a callback and dependency
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) //converting to json 
        .then((res) => setData(res[currency])) //holding the data in data, can also use res.currency using . operator
        console.log(data);
    }, [currency])//whemeber there is chage in currency call this hook
    console.log(data);
    return data
}

export default useCurrencyInfo;

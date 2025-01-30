import React from 'react'
import { useEffect } from 'react';

function inputBox(currency){
  const [data , setData] = useState({});
  useEffect(() =>{

    let curr = fetch(`https://latest.currency-api.pages.dev/v1/currencies/{currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
  } , [currency])
  return data
}
export default inputBox
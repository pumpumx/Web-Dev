import { useState } from "react";

export default async function UseSplashApi(){
    try{
    const [data , setData] = useState({})
    const apiKey = izZo39jz4We2o8WWYx4XLCKsHxHXP6wRNB0ZTinpyvw;
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
    .then((res)=>await (res.json))
    .then((res)=>setData(res[urls]))
    return data;
    }
    catch(error){
        return 0
    }
    
}
import { useEffect, useState } from "react"

// to make api call
const useFetch = (url)=>{
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                // setData(result)
                setData(Object.values(result.recipes));
            })
        })
    },[url])
    return data
}

export default useFetch
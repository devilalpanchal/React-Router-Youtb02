import React from 'react'
import { useSearchParams } from 'react-router-dom'
const SearchPrams = () => {
    const [SearchPrams,setSearchPrams] = useSearchParams();
    const age = SearchPrams.get('age')
    const city = SearchPrams.get('city')
  return (
    <div>

        <h1>Search Params</h1>
        <p>React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL. </p>
        <h1>my age is {age}</h1>
        <h1>my city is  {city}</h1>
        <input  type='text' onChange={(e)=>setSearchPrams({text:e.target.value,age:20})} placeholder='set Text' />
        <button onClick={()=>setSearchPrams({age:40})}>set Age in Querry </button>
    </div>
  )
}

export default SearchPrams
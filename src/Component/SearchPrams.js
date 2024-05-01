import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
const SearchPrams = () => {
    const [SearchPrams, setSearchPrams] = useSearchParams();
    const navigate = useNavigate();
    const age = SearchPrams.get('age')
    const city = SearchPrams.get('city')



    // use of usenavigate Navigating Programmaticly
    // const navPage  =()=>{
    //     let x = true;
    //     if(x){
    //         navigate('/user')
    //     }else{
    //         navigate('/navbar')

    //     }
    // }
    const navPage = (url) => {

        navigate(url)

    }

    return (
        <div>

            <h1>Search Params & Navigating Programmaticly</h1>
            <p>React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL. </p>
            <h1>my age is {age}</h1>
            <h1>my city is  {city}</h1>
            <input type='text' onChange={(e) => setSearchPrams({ text: e.target.value, age: 20 })} placeholder='set Text' /> <br /><br />
            <button onClick={() => setSearchPrams({ age: 40 })}>set Age in Querry </button> <br /> <br />
            <button onClick={() => navigate('/home')}>Go to home page</button> <br /> <br />
            <button onClick={() => navigate('/about')}> Go to About page</button> <br /> <br />
            <button onClick={() => navPage('/navbar')}>Go to navbar page</button> <br /> <br />
            <button onClick={() => navPage('/about')}>Go to About page</button> <br /> <br />
        </div>
    )
}

export default SearchPrams
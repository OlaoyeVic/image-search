import React, { useEffect, useState } from 'react'
import Input from './Input'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';



function App(){
    const [images, setImages] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('office')

    const getAPI = `https://api.unsplash.com/search/photos?page=1&query=${query}`

    async function fetchAPI() {
        const api = await fetch(getAPI, {
            headers: {
                Authorization: "Client-ID LVHCEsGbFOquPOHSXpwsH8mT5qrQtrz-yh1l04wd2F4"
            }
        })
        const data = await api.json()
        console.log(data.results)
        setImages(data.results)
    }
    useEffect(() =>{
        fetchAPI()
    }, [query])

    function handleChange(event) {
        setSearch(event.target.value)
        event.preventDefault()

    }

    function handleSubmit(event){
        event.preventDefault()
        setQuery(search)
        setSearch('')
    }
   

    return(
        <>
            <div >
                <form onSubmit = {handleSubmit}>
                <TextField
                    type = "text" 
                    placeholder = "Search" 
                    onChange = {handleChange} 
                    value = {search} 
                    id="standard-basic" 
                    InputProps={{
                    endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                    }}
                    style = {{
                        marginTop: '150px',
                        height: '10vh',
                        width: '700px',
                        backgroundColor: 'transparent',
                        padding: '1.5 rem 0.5 rem'
                    }}
                    inputProps = {{
                        style: {
                            color: 'blue'
                        }
                    }}
                    />
                </form>
            </div>
            <div className = "image-container">
           {images.length > 0 && images.map((image) => {
               return(
                   <Input 
                    key = {image.id}
                    {...image}
                   />
               )
           })}
           </div>
        </>
    )
}
export default App
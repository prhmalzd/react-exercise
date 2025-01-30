import SearchResult from './SearchResult'
import './NavbarComponents.css'
import { useState , useContext, useEffect } from 'react'
import { http } from '../../Fetch/fetchProducts'
import { Context } from '../../ContextApi/Context'
import { useNavigate } from 'react-router'

let debounceTimerForSearch

function NavbarSearch ({setPath}) {
    const [searchBarValue , setSearchBarValue] = useState('')
    const [searchText , setSearchText] = useState('')
    const [searchResults , setSearchResults] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const {search , changeSearchText} = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        setSearchBarValue('')
        setSearchText('')

      } , [search])

    function onSearchBarChange (e) {
        const text = e.target.value
        setSearchBarValue(text)
        debounce(text)
    }

    function debounce(text) {
        clearTimeout(debounceTimerForSearch)
        
        debounceTimerForSearch = setTimeout(() => {
            setSearchText(text)
            fetchProducts(text)
        } , 800)
    }

    function fetchProducts (search , categoriyID) {
        setIsLoading(true)
        let url = `https://kaaryar-ecom.liara.run/v1/products?page=1&limit=4&search=${search}`
        if (categoriyID) {
          url += `&category=${categoriyID}`
        }
        http(url)
        .then(data => {
            setSearchResults(data.products)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    
    function onProductClicked () {
        setSearchBarValue('')
        setSearchText('')
        changeSearchText('')
    }

    function showMoreBtnHandler() {
        changeSearchText(searchText)
        navigate(`./`)
        setSearchBarValue('')
        setSearchText('')
        setPath('search : ' + searchText)
    }

    return (
        <div className='search-section'>
            <input className='input-search' value={searchBarValue} type='search' placeholder='Search here...' onChange={onSearchBarChange}/>
            {searchText && <div className='search-results-module'>
                {
                    searchResults.length > 0 ?
                    <div className='search-results-container'>
                        {
                        searchResults.map((product) => {
                        return <SearchResult onProductClicked={onProductClicked} info={product} key={product._id}/>
                        })
                        }
                        <button onClick={showMoreBtnHandler}>Show More</button>
                    </div>
                    :
                    <span>Nothing has been found...</span>
                }
            </div>}
        </div>
    )
}

export default NavbarSearch
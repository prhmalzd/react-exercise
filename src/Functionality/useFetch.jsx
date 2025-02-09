import { useState , useEffect } from "react"

function useFetchProducts (url) {
    const [data , setData] = useState([])
    const [pagination , setPagination] = useState(0)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(null)

    useEffect(() => {
        async function fetchProducts () {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Failed to fetch...')
                }
                const data = await response.json()
                if (data.products) {
                    setData(data.products)
                    setPagination(data.pagination.totalPages)
                }
                else {
                    setData(data)
                }
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchProducts()
    } , [url])

    return {data , loading , error , pagination}
}

export default useFetchProducts;
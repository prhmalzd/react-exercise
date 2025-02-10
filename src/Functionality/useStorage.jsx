import { useState , useEffect } from "react"

function useStorage (info , amount) {
    const [data , setData] = useState([])

    useEffect(() => {
        let parsedProducts = JSON.parse(localStorage.getItem('products'))
        if(parsedProducts) {
            if (amount == 0) {
                delete parsedProducts[info._id]
            }
            else if (amount > 0) {
                parsedProducts[info._id] = [info , amount]
            }
            else {
                return
            }
            localStorage.setItem('products' , JSON.stringify(parsedProducts))
    
            setData(parsedProducts)
        }
        
    } , [info , amount])

    return {data}
}

export default useStorage;

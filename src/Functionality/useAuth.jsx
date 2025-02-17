import { useState , useEffect } from "react"

function useAuth (url , email , password , name) {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(null)

    useEffect(() => {
        async function auth () {
            setLoading(true)
            setError(null)
            try {
                let response
                if (!email) {
                    response = await fetch(url , {
                        method: "POST"
                    })
                }
                else {
                    if (name) {
                        response = await fetch(url, {
                            method: "POST",
                            body : {
                                "email": email,
                                "password": password,
                                "name": name
                              }
                        })
                    }
                    else {
                        response = await fetch(url, {
                            method: "POST",
                            body : {
                                "email": email,
                                "password": password
                              }
                        })
                    }
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch...')
                }
                const data = await response.json()

                console.log(data)
                setData(data)
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        auth()
    } , [url])

    return {data , loading , error}
}

export default useAuth;
export function http(...args) {
    return new Promise((resolve , reject) => {
        fetch(...args)
            .then((response) => {
                if (!response.ok) {
                    reject(response)
                    return
                }
                resolve(response.json())
            })
            .catch(error => {
                reject(error)
            })
    })
}
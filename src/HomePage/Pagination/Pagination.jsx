import { useEffect, useState } from 'react'
import './Pagination.css'


function Pagination ({counter , page , paginationHandler}) {
    const [elems , seElems] = useState([])

    useEffect(() => {
        let paginationElems = []
        for (let i = 1 ; i <= counter ; i++) {
            const elem = (<span key={i} className={`page ${i == page ? 'selected' : ''}`}>{i}</span>)
            paginationElems.push(elem)
        }
        seElems(paginationElems)
    } , [counter , page])


    return (
        <div className='pagination-container' onClick={paginationHandler}>
            {elems}
        </div>
    )
}

export default Pagination
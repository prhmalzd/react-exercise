import './Sidebar.css'

const categories = ['Laptops' , 'Smartphones' , 'Cameras' , 'Accessories' , 'Laptops' , 'Smartphones']
const brands = ['Samsung' , 'LG' , 'Sony' , 'Samsung' , 'LG' , 'Sony']

function Sidebar ({products}) {

    const categories_items = categories.map((cate , index) => {
        return (
            <li key={cate + index}>
                <input type='checkbox' name={cate} />
                <label htmlFor={cate} >{cate}</label>
            </li>
        )
    })
    const brands_items = brands.map((brand , index) => {
        return (
            <li key={brand + index}>
                <input type='checkbox' name={brand} />
                <label htmlFor={brand} >{brand}</label>
            </li>
        )
    })

    const topSelling_products = products.map((product , index) => {
        if (index < 3) {
            return (
                <div className='topSelling-product' key={product._id}>
                    <img src={product.images[0]}/>
                    <div className='topSelling-info'>
                        <span className='categoryName'>{product.category.name}</span>
                        <span className='productName'>{product.name}</span>
                        <span className='productPrice'>{Math.floor(product.price)}</span>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className='sidebar-container'>
            <div className='categories'>
                <span className='title'>CATEGORIES</span>
                <ul>{categories_items}</ul>
            </div>
            <div className='price'>
                <span className='title'>PRICE</span>
                <input type='range' className='input-range'/>
                <div className='range-container'>
                    <input type='number'/>
                    <input type='number'/>
                </div>
            </div>
            <div className='brand'>
                <span className='title'>BRAND</span>
                <ul>{brands_items}</ul>
            </div>
            <div>
                <span className='title'>TOP SELLING</span>
                <div className='topSelling'>{topSelling_products}</div>
            </div>
        </div>
    )
}

export default Sidebar
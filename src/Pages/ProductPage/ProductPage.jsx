import './ProductsPage.css'
import useFetchProducts from "../../Functionality/useFetch"
import { useEffect, useState } from 'react'
import useStorage from '../../Functionality/useStorage'

function ProductPage({passData}) {
    const [amount , setAmount] = useState(null)
    const [mainImgUrl , setMainImageUrl] = useState()
    const {data , loading , error} = useFetchProducts(`https://kaaryar-ecom.liara.run/v1/products/6748dfa3c9017c78628d4a95`)
    const storage = useStorage(data , amount)

    useEffect(() => {
        if (data._id) {
            setMainImageUrl(data.images[0])
        }
    } , [data])

    
    useEffect(() => {
        let storagedItems = localStorage.getItem('products')
        if (storagedItems == null) {
        localStorage.setItem('products' , '{}')
        }
        else {
        let items = JSON.parse(localStorage.getItem('products'))
        for (let item in items) {
            let key = item
            let value= items[key]
            if (key == data._id) {
            setAmount(value[1])
            }
        }
        }
    } , [])
    
    useEffect(() => {
        passData(storage.data)
      } , [storage.data])

    function onChangeImage (e) {
        setMainImageUrl(e.target.id)
    }

    function decreaseAmount () {
        if (amount > 0) setAmount(amount => amount-1)
      }
      function increaseAmount () {
        setAmount(amount => amount+1)
      }
      function removeAmount () {
        setAmount(0)
      }

  return (
    <>
        {data._id ? <div className='ProductPage'>
            <div className='imageHolder'>
                <div className='littleImages'>
                    {data.images.map((image) => {
                        return <img id={image} src={image} width={150} key={image} onClick={onChangeImage}/>
                    })}
                </div>
                <img src={mainImgUrl} width={308}/>
            </div>
            <div className='productInfo'>
                <span className='title'>{data.name}</span>
                <div className='productRating'>
                    <div className='ratingStars'>
                        {Array.from({length : 5}).map((rate , index) => {
                            return <span className={data.rating > index + 1 ? 'rate' : 'unrate'} key={index+'rate'}>*</span>
                        })}
                    </div>
                    <span className='ratingCount'>form {data.ratingCount} people</span>
                </div>
                <div className='priceHolder'>
                    <span className='disprice'>{Math.floor(data.price) + 20}$</span>
                    <span className='price'>{Math.floor(data.price)} $</span>
                </div>
                <p className='description'>{data.description}.</p>
                <div className='addToCartSection'>
                    <div className='plusMinus'>
                        <button onClick={decreaseAmount}>-</button>
                        <span>{amount || 0}</span>
                        <button onClick={increaseAmount}>+</button>
                    </div>
                    <button onClick={removeAmount} className={`removeBtn ${amount > 0 ? 'activated' : 'deactivated'}`}>Remove</button>
                </div>
                <span className='productCategory'>Category : {data.category.name}</span>
            </div>
        </div>
        :
        <div>Cant find any product</div>
        }
    </>
  )
}

export default ProductPage

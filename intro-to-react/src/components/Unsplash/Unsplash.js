import React, { useEffect, useState } from 'react'
import ImageSearch from './ImageSearch'
import ImageResults from './ImageResults'
import axios from 'axios'

function Unsplash() {
    const [imageResults, setImageResults] = useState([])
    // const [products, setProducts] = useState([]);
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState(0)
    // function fetchProducts() {
    //     fetch('https://fakestoreapi.com/products/1')
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    // }

    // function addProduct(e) {
    //     e.preventDefault()
    //     const product = { name, price };  // {name: name, price: price}
    //     fetch('https://fakestoreapi.com/products', {             // fetch(url, {
    //         method: 'POST',                                      // method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },     // headers: { 'Content-Type': ''}
    //         body: JSON.stringify(product)                        // })
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // }


    // fetchProducts()
    // addProduct()


    useEffect(() => {
        function getrandomPhotos () {
            axios.get(`https://api.unsplash.com/search/photos?query=random`, {
                headers: { 'Authorization': `Client-ID ${process.env.MY_ACCESS_KEY}` }
            }).then(res => setImageResults(res.data.results))
        }
        
        getrandomPhotos()
    }, [])

    return (
        // <div>{products.length > 0 && products.map(product => <div>{product.title}</div>)}</div>
        <div>
            {/* <form onSubmit={addProduct}>
                <input placeholder='Enter the product name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Enter the product price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type='submit'>Submit</button>
            </form> */}
            <ImageSearch setImageResults={setImageResults}/>
            <ImageResults imageResults={imageResults}/>
        </div>
    )
}

export default Unsplash
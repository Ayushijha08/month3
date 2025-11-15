import React, { useState } from 'react'

function Unsplash() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0)
    function fetchProducts() {
        fetch('https://fakestoreapi.com/products/1')
            .then(response => response.json())
            .then(data => setProducts(data));
    }

    function addProduct(e) {
        e.preventDefault()
        const product = { name, price };  // {name: name, price: price}
        fetch('https://fakestoreapi.com/products', {             // fetch(url, {
            method: 'POST',                                      // method: 'POST',
            headers: { 'Content-Type': 'application/json' },     // headers: { 'Content-Type': ''}
            body: JSON.stringify(product)                        // })
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }


    // fetchProducts()
    // addProduct()
    return (
        // <div>{products.length > 0 && products.map(product => <div>{product.title}</div>)}</div>
        <div>
            <form onSubmit={addProduct}>
                <input placeholder='Enter the product name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Enter the product price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Unsplash
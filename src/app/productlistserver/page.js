"use client"
import React, {useEffect, useState} from 'react';

const ProductList = () => {

    const [product, setProduct] = useState([])

    useEffect(async () => {
        let data = await fetch('https://dummyjson.com/products')
        data = await data.json()
        console.log(data)
        setProduct(data.products)

    }, [])

    let pro = product.map((item) => {
        return `<tr>
                    <td>${item.title}</td>
                    <td>${item.price}</td>
</tr>`
    })

    return (
        <div>
            <h2>Product List Client Side</h2>
            <table className='table'>
                <tbody>
                {pro}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
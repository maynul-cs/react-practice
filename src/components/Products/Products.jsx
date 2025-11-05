import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

  return (
    <div style={{ margin: '20px', padding: '20px', gridTemplateColumns: 'repeat(3, 1fr)', display: 'grid', gap: '20px' }}>
        {
            products.map(product => <Product 
                key={product.id}
                product={product} 
            ></Product> )
        }

    </div>
  )
}

export default Products
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
   const [products, setProducts] = useState(null);
   useEffect(() => {
      const url = "https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/ecommerce/products.json";
      fetch(url)
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [])

   return (
      <>
         {
            products && Object.entries(products).map((item, index) => {
               const key = item[0];
               const productItem = item[1];
               return (
                  <div className="product__column col-4">
                     <div className="product__item p-3">
                        <h2 key={key}>
                           <Link to={`/products/${key}`} className="nav-link text-uppercase text-center">{productItem.name}</Link>
                        </h2>
                        <div className="product__image">
                           <img
                              src={productItem.images[0].src.small}
                              alt={productItem.images[0].alt}
                           />
                        </div>
                     </div>
                  </div>
               )
            })
         }
      </>
   )
}

import React from 'react'
import ProductList from '../components/ProductList'

export default function ProductListPage() {
   return (
      <div className="product container">
         <div className="product__row row">
         <h1 className="header">Product List</h1>
            <ProductList />
         </div>
      </div>
   )
}

import React from 'react';
import { useParams } from 'react-router-dom';
import BackToProductList from '../components/BackToProductList';
import Detail from '../components/Detail';


export default function ProductDetailPage() {
   let params = useParams();
   return (
      <div>
         <BackToProductList />
         <h2 className="text-center">Product Detail Page {params.id}</h2>
         <Detail id={params.id} />
      </div>
   )
}

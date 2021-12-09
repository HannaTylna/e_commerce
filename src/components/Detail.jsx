import React, {useState, useEffect} from "react";
import BackToProductList from "./BackToProductList";

export default function ProductDetail(props) {
  const [productItem, setProductItem] = useState(null)

  useEffect(() => {
    const url = `https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/ecommerce/products/${props.id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => setProductItem(data))
  }, [props.id])

  return (
     <div>
      <p><strong>Id:</strong>{props.id}</p>
      {productItem && (
         <>
            <h3>{productItem.name}</h3>
            <div className="product-detail__wrapper">
               <img
                  src={productItem.images[0].src.small}
                  alt={productItem.images[0].alt}
                  className="product-detail__image"
               />
            </div>
            
            <p>{productItem.description}</p>
            <p><strong>Price: </strong>{productItem.price}$</p>
            <p><strong>Stock: </strong>{productItem.rating}</p>
            <p className="mb-0"><strong>Rating: </strong>{productItem.stock}</p>
        </>
      )}
    </div>
  );
}

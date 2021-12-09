import React from 'react'
import { Link } from 'react-router-dom'

export default function BackToProductList() {
   return (
      <div className="">
         <Link to="/" className="link__back m-3 px-4 py-2">
            {/*Back to the Product List*/}
            <img
               src="https://img.icons8.com/ios-glyphs/30/000000/undo.png"
               alt="A back arrow"
               className="m-3"
            />
         </Link>
      </div>
   )
}

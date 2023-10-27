import React from 'react';
import "./ProductCard.css";
import { useNavigate } from 'react-router-dom';
// import {useLocation, useNavigate} from "react-router-dom";

// const ProductCard = ({product}) => {
// const {title, brand, imageUrl, price, discountedPrice, color, discountPresent} = product;
// const navigate = useNavigate();

// const handleNavigate =()=>{
//     navigate(`/product/${product?.id}`)
// }

const ProductCard = ({ product }) => {
    const navigate=useNavigate();

    return ( //productId=5
        <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
            </div>
            <div className='text-Part bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>Rs. 199</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='text-green-600 font-semibold'>70% off</p>
                </div>

            </div>
        </div>
    )
}

export default ProductCard
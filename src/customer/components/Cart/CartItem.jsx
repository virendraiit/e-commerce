import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';


const CartItem = ({item}) => {
    
    const dispatch=useDispatch();

    const handleUpdateCartItem=(num)=>{
        // const data={data:{quantity:item.quantity+num}, cartItemId:item?.id}
        const data={data:{quantity:1+num}, cartItemId:item?.id}
        dispatch(updateCartItem(data))
    }

    const handleRemoveCartItem=()=>{
        // dispatch(removeCartItem(item.id))
    }


  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5-rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://rukminim2.flixcart.com/image/832/832/l0zm64w0/kurta/q/q/t/m-grey-23-yellow-freluro-original-imagcnh2h2g2cum2.jpeg" alt=""/>

            </div>
            <div className='ml-5 space-y-1'>
                {/* item.title */}
                <p className='font-semibold'>Men Solid Cotton Blend Straight Kurta</p> 
                <p className='opacity-70'>Size: L, Yellow</p>
                <p className='opacity-70 mt-2'>FRELURO Brand</p>
                
                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semibold'>Rs. 199</p>
                    <p className='line-through opacity-50'>Rs. 211</p>
                    <p className='text-green-600 font-semibold'>70% off</p>
                </div>
                

            </div>

            

        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>
                    {/* <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}> */}
                    <IconButton onClick={()=>handleUpdateCartItem(-1)}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    {/* <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span> */}
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>    
                </div>

                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color:"RGB(145 85 253)"}}>remove</Button>
                </div>

            </div>

    </div>
  )
}

export default CartItem
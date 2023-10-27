import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
        <div className='space-y-3'>
            {/* <p className='font-semibold'>{address?.firstName+" "+address?.lastName}</p> */}
            <p className='font-semibold'>Virendra Kumar</p>
            <p>Gurgaon, Sector 21, 122016</p>
            <div>
                <p className='font-semibold'>Phone Number</p>
                <p>1234567890</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard
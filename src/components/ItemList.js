import React from 'react'
import { CDN_URL } from '../utils/contants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({info}) => {
// console.log(info);
const dispatch = useDispatch()

const handleAddItem =(x) => {
  //we need to dispatch an action  on the add button click 
  dispatch(addItem(x))
}

  return (
    <div>
        {info.map(item=>
        <div key={item.card.info.id} className='p-2  border-b-2  border-gray-400 m-4 flex'>
            <div className='w-9/12 '>
            <div className='font-semibold text-left '>{item.card.info.name}</div>
            <div className='font-semibold text-left'>Rs-{item.card.info.d?item.card.info.defaultPrice/100:item.card.info.price/100}</div>
            <div className='text-[15px] text-gray-400 text-left'>{item.card.info.description}</div>
            </div>
            <div className='w-3/12 mx-2 '>
            <div className='absolute'>
                <button className=' bg-black p-2 text-white rounded-md m-auto'
                onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
                <img src={CDN_URL+item.card.info.imageId} className='border-2 rounded-lg border-black'/>
                

            </div>
            
            

        </div>
    )}
        

    </div>
  )
}

export default ItemList
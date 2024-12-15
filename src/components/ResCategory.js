import React, { useState } from 'react'
import ItemList from './ItemList';

const ResCategory = ({data, showList,setShowIndex}) => {
    // console.log(data);
    // const[showList, setShowList] = useState(false)
    
    const handleClick= ()=>{
        // setShowList(!showList)
        setShowIndex()
    }
  return (
    <div className='bg-gray-200 w-6/12 mx-auto my-4 shadow-md rounded-md cursor-pointer' onClick={handleClick}>
        {/* accordian header */}
        <div className='font-bold p-4 flex justify-between'>
            <span>{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>

        {/* accordian body */}
        <div>
            {showList && <ItemList info={data.itemCards}/>}
        </div>
    </div>
    
  )
}

export default ResCategory
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authorRemoved, categoryRemoved } from '../Redux/search/action'

const Filters = () => {
    const dispatch = useDispatch()
    const { category, author } = useSelector(state => state.filters)
  return (
    <div className='py-4 flex gap-5'>
        {category && (<button className='px-3  bg-indigo-100 text-indigo-800 rounded-full relative' >{category} <span onClick={() => dispatch(categoryRemoved())} className='text-[10px] font-bold absolute -top-2 -right-2 border border-gray-500 rounded-full px-1'>X</span></button>) }

        {author && (<button className='px-3  bg-indigo-100 text-indigo-800 rounded-full relative' >{author} <span onClick={() => dispatch(authorRemoved())} className='text-[10px] font-bold absolute -top-2 -right-2 border border-gray-500 rounded-full px-1'>X</span></button>) }
                
            </div>
  )
}

export default Filters
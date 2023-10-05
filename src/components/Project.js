import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'> 
      <a href={item.href}>
      <img className='rounded-2xl hover:scale-110 transition-all duration-500 cursor-pointer' src={item.image} alt="" /></a>
      </div>
    <p className='capitalize textaccent text-sm mb-3' >{item.category}</p>
    
    <h3 className='text-2xl'>{item.name}</h3>
    </div>
    
  )
}
export default Project;
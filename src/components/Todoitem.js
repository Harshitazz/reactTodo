import React from 'react'

export default function Todoitem({todo , ondelete}) {
  return (
    <div style={{display:"flex"}}>
      <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      
      </div>
      <button className='btn btn-danger btn-sm' onClick={()=>{ondelete(todo)}} style={{position :'absolute',right:'30px'}}>delete</button>
  
    </div>
  )
}
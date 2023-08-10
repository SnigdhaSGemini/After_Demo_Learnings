import React from 'react'

const Todo = (props) => {
    const { todos, newEntry} = props;
    console.log("Todo render");
  return (
    <>
    <h3>To Do List</h3>
      <ul className='list-group  '>
        {
            todos.map(( data, idx)=>{
               return <li className='list-group-item list-group-item-primary m-1' key={idx}>
                {idx}.  {" " +data + " " + idx}</li>
            })
        }
      </ul>
      <button onClick={newEntry} className='btn-secondary btn m-3'>Add</button>
    </>
  )
}

export default Todo

import React from 'react'
import './card.css';

const Card = (props) => {
    const {title, content} = props;
    console.log(title);
    console.log(content);

  return (
    <>
       <li >
            <div className='cards text-center '>
            <p className='card-title'>{title}</p>
            <h4 className='card-content'>{content}</h4>
            </div>
        </li>
    </>
  )
}

export default Card

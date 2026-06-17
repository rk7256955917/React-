import React from 'react'
import 'remixicon/fonts/remixicon.css';
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div className='h-full rounded-4xl overflow-x-auto flex flex-nowrap p-6 w-2/3 '>
         {props.users.map(function(elem){
          return <RightCard img={elem.img} tag={elem.tag}/>
         })}
    </div>
  )
}

export default RightContent

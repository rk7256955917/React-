import React from 'react'

const Card = (props) => {
    console.log(props.user);


  return (
    <div className="card">
    <img src={props.img} alt="Nature pic" />
    <h1>{props.user},{props.age}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo, perspiciatis adipisci saepe ex officia odit voluptatum dolorum, hic in, blanditiis dignissimos quasi dolores assumenda voluptatem placeat quis impedit vel.</p>
    <button>view profile</button>
   </div>
  )
}

export default Card

import React from 'react'
import './Image.css'

// function Image(props) {
//   return (
//     <>
//        <div className='momo'>
//         <img  src={props.img}/>
//         <h1 className='offer'>60% off upto 120</h1>
//         <h2 className='king'>{props.name}</h2>
//         <h4 className='king'>rating: 4.4</h4>
//         <p className='king'>sector:34</p>
//       </div>
      
//     </>
//   )
// }

// export default Image


function Image({name,img,rating}) {
    return (
      <>
         <div className='momo'>
          <img  src={img}/>
          <h1 className='offer'>60% off upto 120</h1>
          <h2 className='king'>{name}</h2>
          <h4 className='king'>rating: {rating}</h4>
          <p className='king'>sector:34</p>
        </div>
        
      </>
    )
  }
  
  export default Image









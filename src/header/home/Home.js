import React from 'react'
import data from '../../data/Data'
import Image from '../../components/Image'

function Home() {
  return (
    <>

<div className='parent'>

{
  data.map((value)=>{
      return (
        <>
        <Image name={value.name} img={value.img} rating={value.rating}/>
        </>
      )
  })
}


</div>
    </>
  )
}

export default Home
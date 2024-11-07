// import img1 from './saurabh.png'
// import video1 from './video.mp4'
// import './App.css'

//   function App(){

//         return(
//           <div>
//             <h1 style={{backgroundColor:'red',textAlign:'center'}}>welcome</h1>
//             <h1 className='mukul'> happy</h1>
//             <p >i am very good</p>
//             <a href="https://sandeepmaheshwari.com/">click here</a>
//             <img src="https://img1.wsimg.com/isteam/ip/1172a89b-094a-415b-99fe-cc1e7d3cd9b0/blob-24cc2f2.png/:/cr=t:6.5%25,l:19.37%25,w:42.38%25,h:84.75%25/rs=w:365,h:487,cg:true,m"/>
//             <img src={img1}/>
//             <video src={video1} controls></video>
//           </div>
//         )
//   }
 

//   export default App




// import './App.css'
// import Image from './Image'



// function App() {
//   return (
//     <>
//      <Image/>
//      <div className='parent'>
//      <div className='momo'>
//         <img  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_41350.JPG'/>
//         <h1 className='offer'>60% off upto 120</h1>
//         <h2 className='king'>Burger King</h2>
//         <h4 className='king'>rating: 4.4</h4>
//         <p className='king'>sector:34</p>
//       </div>
//       <div className='momo'>
//         <img  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597'/>
//         <h1 className='offer'>60% off upto 120</h1>
//         <h2 className='king'>Burger King</h2>
//         <h4 className='king'>rating: 4.4</h4>
//         <p className='king'>sector:34</p>
//       </div>
//       <div className='momo'>
//         <img  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gnfaeaeddfxdzrxzoikp'/>
//         <h1 className='offer'>60% off upto 120</h1>
//         <h2 className='king'>Burger King</h2>
//         <h4 className='king'>rating: 4.4</h4>
//         <p className='king'>sector:34</p>
//       </div>
//       <div className='momo'>
//         <img  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d96267738c19ec62acb5390e52faba41'/>
//         <h1 className='offer'>60% off upto 120</h1>
//         <h2 className='king'>Burger King</h2>
//         <h4 className='king'>rating: 4.4</h4>
//         <p className='king'>sector:34</p>
//       </div>
//       <div className='momo'>
//         <img  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_41350.JPG'/>
//         <h1 className='offer'>60% off upto 120</h1>
//         <h2 className='king'>Burger King</h2>
//         <h4 className='king'>rating: 4.4</h4>
//         <p className='king'>sector:34</p>
//       </div>
//      </div>
     
//     </>
//   )
// }

// export default App




// import React from 'react'
// import Image from './Image'
// import './App.css'
// import data from './Data'


// function App() {

  
//   console.log(data[0].name)
//   return (
//     <>
//      <div className='parent'>
//      <Image name={data[0].name} img={data[0].img}/>
//      <Image name={data[1].name} img={data[1].img}/>
//      <Image name={data[2].name} img={data[2].img}/>
//      <Image name={data[3].name} img={data[3].img}/>


//           {
//             data.map((value)=>{
//                 return (
//                   <>
//                   <Image name={value.name} img={value.img} rating={value.rating}/>
//                   </>
//                 )
//             })
//           }


//      </div>
//     </>
//   )
// }










import React from 'react'
import './App.css'
import Header from './header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './header/home/Home'
import About from './header/about/About'
import Contact from './header/contact/Contact'
import Register from './header/register/Register'
import Footer from './footer/Footer'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    
    </>
  )
}


export default App







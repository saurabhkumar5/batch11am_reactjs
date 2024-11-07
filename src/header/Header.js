

import React from 'react'
import './Header.css'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
    <div className='header'>
    <div>logo</div>
     <div className='container'>
     {/* <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>Contact</Link>
     <Link to='/register'>Register</Link> */}


     <NavLink to='/' style={({isActive})=>{
     return {backgroundColor:isActive?'yellow':''}}}>Home</NavLink>

     <NavLink to='/about' style={({isActive})=>{
     return {backgroundColor:isActive?'yellow':''}}}>About</NavLink>
     <NavLink to='/contact' style={({isActive})=>{
     return {backgroundColor:isActive?'yellow':''}}}>Contact</NavLink>
     <NavLink to='/register' style={({isActive})=>{
     return {backgroundColor:isActive?'yellow':''}}}>Register</NavLink>
     </div>
    </div>

    </header>
    </>
  )
}

export default Header
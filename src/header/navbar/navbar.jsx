import React from 'react'
import './navbar.css'
import Product from './product/product'

export default function Navbar() {
  return (
    <div>
          <nav class="nav-menu">
            <ul>
               <li class="active"><a href="http://www.myinceptiontech.com">Home</a></li>
               <li><a href="http://www.myinceptiontech.com/about_us">About Us</a></li>
               <li><a href="http://www.myinceptiontech.com/services">Services</a></li>
               <li><a href= {<Product/>}>Products</a></li>
        
               <li><a href="http://www.myinceptiontech.com/job_seeker">Job Seekers</a></li>
               <li><a href="http://www.myinceptiontech.com/contact">Contact Us</a></li>
            </ul>
          </nav>
    </div>
  )
}

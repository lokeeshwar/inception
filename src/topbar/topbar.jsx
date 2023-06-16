import React from 'react'
import './topbar.css';
import { GrMail } from 'react-icons/gr';
import { MdPhone } from 'react-icons/md';


export default function TopBar() {
  return (
    <div id='topbar'>
    <div className='container-clearfix'>
        <div  className="contact-info-left">
            <i class="GrMail"><GrMail/></i>
            <a href="mailto:contact@example.com">support@myinceptiontech.co.in</a>
            <i class="icofont-phone"><MdPhone/></i> 9884792981 / 9176777890
        </div>
        <div className="social-links-right">
            <a  href="http://www.myinceptiontech.com/login">Login</a> <br />
            <a  href="http://www.myinceptiontech.com/register">Register</a>
        </div>
    </div>
    </div>
  )
}
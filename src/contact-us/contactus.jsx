import React from 'react'
import './contactus.css'
import Contact from '../contact/contact'


export default function Contactus() {
  return (
    <div>
        <Contact/>
        <div className='cus'>
            <form>
                                          
                <div class="row-us">
                                <div class="col-lg-6 form-group">
                                    <input type="text" id="form_name" name="name" required="required" class="form-control" placeholder="Enter your name"/>

                                </div>
                                <div class="col-lg-6 form-group">
                                    <input type="email" id="form_email" name="email" required="required" class="form-control" placeholder="Enter email address"/>

                                </div>
                </div>
                <div class="row-us">
                                <div class="col-lg-6 form-group">
                                    <input type="number" id="form_phone_no" name="mobile_no" required="required" class="form-control" placeholder="Enter your mobile number"/>
                                </div>
                                <div class="form-group col-lg-6">
                                    <input type="text" id="form_subject" name="subject" required="required" class="form-control" placeholder="Enter Subject"/>
                                </div>
                </div>

                            <div class="form-group">
                                <textarea id="form_message" name="message" required="required" class="form-control h-94" placeholder="Enter Message"></textarea>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

        </div>
    </div>
  )
}

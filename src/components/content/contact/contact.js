import React, {Component} from 'react';
import './contact.scss';

class Contact extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            subject: '',
            emailId:'',
            description: ''
        }
    }

    render(){
        return(
            <div id="contact" className="section container-fluid">
                <div className="sectionWrapper">
                    <h1 className="heading">Contact</h1>
                    <p className="description ">LET'S MAKE SOMETHING AWESOME TOGETHER. GET IN CONTACT</p>
                    <div className='content contact'>
                        <form className='ConatctForm'>
                            <input placeholder='Name' className='controls' type='text' name='name'/>
                            <input placeholder='Subject' className='controls' type='text' name='subject'/>
                            <input placeholder='Email ID' className='controls' type='text' name='email'/>
                            <textarea placeholder='Amazing IDEA' name='description' className='controls'></textarea>
                            <button className='controls'>let's connect<span className='sendIcon'></span></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;

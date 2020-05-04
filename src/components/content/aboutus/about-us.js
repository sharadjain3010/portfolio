import React, {Component} from 'react';
import './about-us.scss';

class AboutUs extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="intro" className="section container-fluid">
                <div className="sectionWrapper blackFont">
                    <h1 className="heading">about me</h1>
                    <p className="description">Hello, I'm a Frontend Developer with close interest in User Interface designing from Pune, India. I have around 4 yrs of experience and hold a bachlers degree of Engineering in Information Technology.</p>
                    <div className="userInfo content row">
                        <div className="userDetail col-sm-12 col-md-6">
                            <ul>
                                <li>
                                    <label>name</label>
                                    <label>sharad jain</label>
                                </li>
                                <li>
                                    <label>email</label>
                                    <label>sharadjain3010@gmail.com</label>
                                </li>
                                <li>
                                    <label>phone</label>
                                    <label>0789871531</label>
                                </li>
                                <li>
                                    <label>date of birth</label>
                                    <label>30-10-1993</label>
                                </li>
                                <li>
                                    <label>nationality</label>
                                    <label>indian</label>
                                </li>
                            </ul>
                            <a href="src/assets/Images/userImage.jpg" download className="downloadButton">download resume</a>
                        </div>
                        <div className="userImg col-sm-12 col-md-6">
                            <label></label>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default AboutUs;

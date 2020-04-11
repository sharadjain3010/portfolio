import React, {Component} from 'react';
import './main-content.scss';

class Maincontent extends Component{
    constructor(){
        super();
    }
    skills = {
        
    }
    personalDetails = {
        name: 'sharad jain',
        email: 'sharadjain3010@gmail.com',
        phone: '7898271531',
        dob: '30/10/1993',
        nationality: 'indian'
    }

    render(){
        return (
            <main>
                <div id="intro" className="section container-fluid">
                    <div className="sectionWrapper blackFont">
                        <h1 className="heading">about me</h1>
                        <p className="description">Hello, I'm a Frontend Developer with close interest in User Interface designing from Pune, India. I have around 4 yrs of experience and hold a bachlers degree of Engineering in Information Technology.</p>
                        <div className="userInfo content">
                            <div className="userDetail">
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
                                <a href="../../assets/Sharad_Jain.pdf" download className="downloadButton">download resume</a>
                            </div>
                            <div className="userImg">
                                <label></label>
                            </div>
                        </div>
                    </div>    
                </div>
                <div id="skills" className="section container-fluid">
                    <div className="sectionWrapper whiteFont">
                        <h1 className="heading">Skills</h1>
                        <p className="description">Responsive webdesign is what’s shaping the online experience now. The internet is now a platform of services and I have the skills to offer your visitors the optimal viewing experience, regardless of the device they choose.It is much more than just adjusting screen resolutions and using automatically resizable images.</p>
                        <div className='skills content'>
                            <ul>
                                <li className='skillrow'>
                                    <span>web tech</span>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JSON</li>
                                        <li>ES6</li>
                                        <li>Jquery</li>
                                        <li>TypeScript</li>
                                    </ul>
                                </li>
                                <li className='skillrow'>
                                    <span>frameworks</span>
                                    <ul>
                                        <li>angular</li>
                                        <li>react</li>
                                        <li>bootstrap</li>
                                        <li>angular material</li>
                                        <li>flexLayout</li>
                                        <li>SCSS</li>
                                    </ul>
                                </li>
                                <li className='skillrow'>
                                    <span>version control systems</span>
                                    <ul>
                                        <li>git</li>
                                        <li>svn</li>
                                        <li>microsoft TFS</li>
                                    </ul>
                                </li>
                                <li className='skillrow'>
                                    <span>methodology and tools used</span>
                                    <ul>
                                        <li>agile methodology</li>
                                        <li>jira</li>
                                        <li>confluence</li>
                                        <li>microsoft vsds</li>
                                        <li>version one</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div>
                <div id="experience" className="section container-fluid">
                    <div className="sectionWrapper blackFont" >
                        <h1 className="heading">experience</h1>
                        <p className="description">I have an experience working with many clients from different different domains and has understanding of various industries and their terminology. I have sucessfully completed several project while working for organizations.</p>
                       <div className='content row'>
                            <div className=" card col-sm-offset-1 col-sm-12 col-md-6 col-lg-4" >
                                <ul>
                                    <li>cognizant technology solutions</li>
                                    <li><span>experience</span>
                                        <span>1 yr</span></li>
                                    <li><span>technology</span>
                                        <span>front end development</span></li>
                                    <li><span>position</span>
                                        <span>Senior front end developer</span></li>
                                </ul>
                            </div>
                            <div className=" card col-sm-offset-1 col-sm-12 col-md-6 col-lg-4" >
                            <ul>
                                <li>tata consultancy sevices</li>
                                <li><span>experience</span>
                                    <span>3 yrs 3 months</span></li>
                                <li><span>technology</span>
                                    <span>front end development</span></li>
                                <li><span>position</span>
                                    <span>front end developer</span></li>
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
                <div id="education" className="section container-fluid">
                    <div className="sectionWrapper whiteFont">
                        <h1 className="heading ">Education</h1>
                        <p className="description ">Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <div className="content">
                            <div className='card col-sm-12 col-md-6 '>
                                <ul>
                                    <li>graduation</li>
                                    <li><span>college</span>
                                        <span>guru ramdas khalsa institute of science and technology</span></li>
                                    <li><span>stream</span>
                                        <span>Information technology</span></li>
                                    <li><span>batch  </span>
                                        <span>2011-15</span></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div id="connect" className="section container-fluid">
                    <div className="sectionWrapper">
                        <h1 className="heading">Contact</h1>
                        <p className="description ">LET'S MAKE SOMETHING AWESOME TOGETHER. GET IN CONTACT</p>
                        <div className='content contact'>
                            <form className='ConatctForm'>
                                <input placeholder='' className='controls' type='text' name=''/>
                                <input placeholder='Subject' className='controls' type='text' name=''/>
                                <textarea placeholder='Amazing IDEA' className='controls'></textarea>
                                <button className='controls'>let's connect<span className='sendIcon'></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default Maincontent;
import React from 'react';

function Maincontent(){
        return (
            <main>
                <div id="intro" className="contentSec section container-fluid">
                    <div className="sectionWrapper">
                        <h1 className="heading 1 blackFont">about me</h1>
                        <p className="description blackFont">Hello, I'm a Frontend Developer with close interest in User Interface designing from Pune, India. I hold a bachlers degree of Engineering in Information Technology.</p>
                        <div className="userInfo">
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
                                <a href="#" download className="downloadButton">download resume</a>
                            </div>
                            <div className="userImg">
                                <label></label>
                            </div>
                        </div>
                    </div>    
                </div>
                <div id="skills" className="contentSec section container-fluid parallex-effect">
                    <div className="sectionWrapper">
                        <h1 className="heading 2">Skills</h1>
                        <p className="description whiteFont">Responsive webdesign is what’s shaping the online experience now. The internet is now a platform of services and I have the skills to offer your visitors the optimal viewing experience, regardless of the device they choose.It is much more than just adjusting screen resolutions and using automatically resizable images.</p>
                        <div className='skills'>
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
                <div id="experience" className="contentSec section container-fluid">
                    <div className="sectionWrapper">
                        <h1 className="heading 4 blackFont">experience</h1>
                        <p className="description blackFont">Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <div className="eduContainer">
                            <ul>
                                <li>tata consultancy sevices</li>
                                <li><span>experience</span>
                                    <span>2 yrs</span></li>
                                <li><span>technology</span>
                                    <span>front end development</span></li>
                                <li><span>position</span>
                                    <span>front end developer</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="education" className="contentSec section container-fluid">
                    <div className="sectionWrapper">
                        <h1 className="heading 3 whiteFont">Education</h1>
                        <p className="description whiteFont">Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <div className="eduContainer">
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
                <div id="connect" className="contentSec section container-fluid">
                    <div className="sectionWrapper">
                        <span className="subHeading">LET'S MAKE SOMETHING AWESOME TOGETHER. GET IN</span>
                        <h1 className="heading 5">Contact</h1>
                        
                    </div>
                </div>
            </main>
        );
    }


export default Maincontent;
import React, {Component} from 'react';
import './experience.scss';

class Experience extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="experience" className="section container-fluid">
                <div className="sectionWrapper blackFont" >
                    <h1 className="heading">experience</h1>
                    <p className="description">I have an experience working with enterprise level web applications with latest web technologies and web standards and sucessfully completed several projects while working for organizations.</p>
                    <div className='content row timeLine'>
                        <div className='timelineContent'>
                            <label className="duration">apr 2020 - till now</label>
                            <div className="card" >
                                <ul>
                                    <li>Deloitte</li>
                                    <li><span>experience</span>
                                        <span>1 yr</span></li>
                                    <li><span>technology</span>
                                        <span>front end development</span></li>
                                    <li><span>position</span>
                                        <span>Senior front end developer</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='timelineContent'>
                            <label className="duration">Jun 2019 - apr 2020</label>
                            <div className="card" >
                                <ul>
                                    <li>Cognizant technology solutions</li>
                                    <li><span>experience</span>
                                        <span>1 yr</span></li>
                                    <li><span>technology</span>
                                        <span>front end development</span></li>
                                    <li><span>position</span>
                                        <span>Senior front end developer</span></li>
                                </ul>
                            </div>
                        </div>
                        <div  className='timelineContent'>
                            <label className="duration">Feb 2016 - Apr 2019</label>
                            <div className="card" >
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
                        <div className='timelineContent'>
                            <label className="duration">2011-2015</label>
                            <div className='card '>
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
            </div>
        )
    }
}

export default Experience;

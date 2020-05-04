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
        )
    }
}

export default Experience;

import React, {Component} from 'react';

class Skill extends Component{
    constructor(){
        super()
    }

    render(){
        return(
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
        )
    }
}

export default Skill;

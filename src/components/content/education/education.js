import React, {Component} from 'react';

class Education extends Component{
    constructor(){
        super()
    }

    render(){
        return(
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
        )
    }
}

export default Education;

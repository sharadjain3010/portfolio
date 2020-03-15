import React from 'react';

class Navigation extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#"><span>sj</span> sharad jain</a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="#section1" name="section-1">About Me</a></li>
                <li><a href="#section2" name="section-2">Skills</a></li>
                <li><a href="#section3" name="section-3">Education</a></li>
                <li><a href="#section4" name="section-4">Employment</a></li>
                <li><a href="#section5" name="section-5">Contact</a></li>
            </ul>
            <div className="socialLinks">
                <a target="_blank" href="https://www.facebook.com" className="fa fa-facebook"></a>
                <a target="_blank" href="https://www.gmail.com" className="fa fa-google"></a>
                <a target="_blank" href="https://www.linkedin.com/in/sharad-jain-304369b7" className="fa fa-linkedin"></a>
            </div>
        </div>
    </nav>
        );
    }
}

export default Navigation;
import React, {Component} from 'react';
import './navigation.scss';

class Navigation extends Component {
    constructor(){
        super();
        this.state = {isToggle: false};
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar(){
        
        this.setState((state)=>({
            isToggle: !state.isToggle
        }));
        console.log('navbar clicked', this.state.isToggle);
    }

    render() {
        return (
            <nav className="navbar" id='navbar' onClick={this.toggleNavbar}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><span>sj</span> sharad jain {this.state.isToggle}</a>
                        <span className='hamburger'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#intro" name="section-1">About Me</a></li>
                        <li><a href="#skills" name="section-2">Skills</a></li>
                        <li><a href="#experience" name="section-4">Employment</a></li>
                        <li><a href="#education" name="section-3">Education</a></li>
                        <li><a href="#contact" name="section-5">Contact</a></li>
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
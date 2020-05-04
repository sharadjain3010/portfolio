import React, {Component} from 'react';
import './navigation.scss';
import { Link} from 'react-router-dom';

class Navigation extends Component {
    constructor(props){
        super();
        console.log(`props from parent - ${props}`);
        this.state = {isToggle: false};
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar(){
        this.setState((state)=>({
            isToggle: !state.isToggle
        }));
    }

    toggleBackdrop(){
        const {isToggle} = this.state;
        if(isToggle){
            const backdropElement = document.createElement('div');
            backdropElement.setAttribute('class','backdrop');
            document.querySelector('.App').append(backdropElement);
        }else{
            document.querySelector('.App .backdrop').remove();
        }
    }

    render() {
        const { isToggle } = this.state;
        return (
                <nav className={`navbar ${isToggle ? 'open' : ''}`} id='navbar'>              
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"><span>sj</span> sharad jain </a>
                            <span className='hamburger'  onClick={this.toggleNavbar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <ul className="nav navbar-nav">
                        
                            <li><Link to='/'>About Me</Link></li>
                            <li><Link to='/Skill'>Skills</Link></li>
                            <li><Link to='/Experience'>Employment</Link></li>
                            <li><Link to='/Education'>Education</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
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
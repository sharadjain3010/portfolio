import React, {Component} from 'react';
import './main-content.scss';
import AboutUs from './aboutus/about-us';
import Skill from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';
import Contact from './contact/contact';


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
                <AboutUs></AboutUs>
                <Skill></Skill>
                <Experience></Experience>
                <Education></Education>
                <Contact></Contact>
            </main>
        );
    }
}


export default Maincontent;
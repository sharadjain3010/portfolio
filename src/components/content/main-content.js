import React, {Component} from 'react';
import './main-content.scss';
import AboutUs from './aboutus/about-us';
import Skill from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';
import Contact from './contact/contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Maincontent extends Component{
    constructor(){
        super();
    }

    render(){
        return (
                <main className=''> 
                    <Switch>
                        <Route path='/' exact component={AboutUs}/>
                        <Route path='/Skill'  component={Skill}/>
                        <Route path='/Experience'  component={Experience}/>
                        <Route path='/Education'  component={Education}/>
                        <Route path='/Contact'  component={Contact}/>
                    </Switch>
                </main>
        );
    }
}


export default Maincontent;
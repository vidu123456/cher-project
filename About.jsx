import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header';
import Button from './Button';

function About(){

    const navigate = useNavigate();
    return (
        <div>
            <Header title = "About Page" subtitle= "click the button below to go back to the Home Page"/>
            <Button text = "Home" onClick={() => navigate('/')} />
        

        </div>

    );
}
export default About;
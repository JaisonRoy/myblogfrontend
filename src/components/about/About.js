import React from 'react';
import './About.css';
import myImage from './pic.jpg';

function About(props) {
    return (
        <>
            <div className="profile">
                <img src={myImage} alt="Profile" id="pic" />
                <h1>Jaison</h1>
                <h3>Software Engineer</h3>
            </div>
            <p>Software engineers, sometimes called software developers, create software for computers and applications. If you’re an analytical thinker who enjoys solving problems and making digital products easier to use, you may find a career as a software engineer rewarding.Successful engineers know how to use the right programming languages, platforms, and architectures to develop everything from computer games to network control systems. In addition to building their own systems, software engineers also test, improve, and maintain software built by other engineers. </p>
        </>
    );
}

export default About;
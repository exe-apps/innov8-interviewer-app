import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../css/Requirements.css';

const Requirements = () => {
    return(
        <div>
            <Jumbotron fluid className='requirement-panel'>
                <Container>
                    <h1>Java - Fullstack</h1>
                    <p>
                        Resource knowledgeable in both front-end and back-end development. Must have strong Java foundation and experience in order to adapt to changing project requirements. Must be capable of designing and implementing RESTful API's. Lastly, must be knowledgeable in front-end technologies such as HTML, CSS and Javascript/ECMA6.
                    </p>
                    <p>Must atleast reach the minimum scores below:</p>
                    <ul>
                        <li>Object Oriented Programming - 6</li>
                        <li>Java - 6</li>
                        <li>REST Development (JAX-RS / SpringBoot) - 6</li>
                        <li>Javascript (EMCA6 / ReactJS) - 6</li>
                    </ul>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className='requirement-panel'>
                <Container>
                    <h1>Java - Web Technologies (REST / Microservices)</h1>
                    <p>
                        Resource knowledgeable in back-end development. Must have strong Java foundation and experience in order to adapt to changing project requirements. Must be capable of designing and implementing RESTful API's and Microservices. 
                    </p>
                    <p>Must atleast reach the minimum scores below:</p>
                    <ul>
                        <li>Object Oriented Programming - 6</li>
                        <li>Java - 6</li>
                        <li>REST Development (JAX-RS / SpringBoot) - 6</li>
                    </ul>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className='requirement-panel'>
                <Container>
                    <h1>Java - Front-end</h1>
                    <p>
                        Resource knowledgeable in front-end development. Must have Java knowledge. Lastly, must be knowledgeable in front-end technologies such as HTML, CSS and Javascript/ECMA6/ReactJS/Vue/Angular.
                    </p>
                    <p>Must atleast reach the minimum scores below:</p>
                    <ul>
                        <li>Object Oriented Programming - 6</li>
                        <li>Java - 6</li>
                        <li>Javascript (EMCA6 / ReactJS / Vue / Angular) - 6</li>
                    </ul>
                </Container>
            </Jumbotron>
        </div>
        
    );
}

export default Requirements;
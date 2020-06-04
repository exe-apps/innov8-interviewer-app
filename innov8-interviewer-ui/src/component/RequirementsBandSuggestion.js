import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import BadgeGenerator from './BadgeGenerator';
import '../css/RequirementsBandSuggestion.css';

const RequirementsBandSuggestion = (props) => {

    return (
        <Jumbotron className='band-req-panel' fluid>
            <Container className='band-req-bubble' fluid>
                  <h1>Band Level Recommendations</h1>
                  <hr></hr>
                  <br></br>
                  <p className='instruction-text'>
                      Interviewers can give recommendations on what Band Level a candidate is, based on the technical interview. The interviewers can filter out non-IT related experience, as well as technologies not relevant to the account, then provide a suggested band level based on the interview score and relevant experience.
                  </p>
                  <p className='instruction-text'>See band criteria:</p>
                  <p className='instruction-text'>6G - Training experience is accepted</p>
                  <p className='instruction-text'>6A - 1 to 2 years of relevant experience</p>
                  <p className='instruction-text'>6B - 3 to 5 years of relevant experience</p>
                  <p className='instruction-text'>7A - 6 to 8 years of relevant experience</p>
                  <p className='instruction-text'>7B - 9+ years of relevant experience</p>
            </Container>
        </Jumbotron>
    );
}

export default RequirementsBandSuggestion;
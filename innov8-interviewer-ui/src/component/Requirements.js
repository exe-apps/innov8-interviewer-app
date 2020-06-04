import React, {Component} from 'react';
import { connect } from "react-redux";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../css/Requirements.css';
import { 
    getRequirementsList
} from '../redux/action/requirement-action';

class Requirements extends Component {

    componentDidMount() {
        this.props.getRequirementsList();
    }

    render() {
        const { requirementsList } = this.props;

        return(
            <div className='content-body'>
                {
                    requirementsList.map((requirement, index) => {
                        return (
                            <Jumbotron fluid className='requirement-panel' key={index}>
                                <Container>
                                    <h1>{requirement.name}</h1>
                                    <br/>
                                    <p>{requirement.description}</p>
                                    <br/>
                                    {
                                        requirement.scores.length > 0 ? <p>Must atleast reach the minimum scores below:</p> : null
                                    }
                                    {
                                        requirement.scores.length > 0 && 
                                        <ul>
                                            {
                                                requirement.scores.map((score, idx) => {
                                                    return <li key={idx}>{score}</li>
                                                })
                                            }
                                        </ul>
                                    }
                                </Container>
                            </Jumbotron>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        requirementsList: state.requirementData.requirementsList,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getRequirementsList: () => dispatch(getRequirementsList())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Requirements);
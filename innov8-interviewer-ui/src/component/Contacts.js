import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Contacts.css';
import Figure from 'react-bootstrap/Figure';
import { 
    getContactList
} from '../redux/action/contact-action';

class Contacts extends Component {
    
    componentDidMount() {
        this.props.getContactList();
    }

    render() {
        const { contactList } = this.props;

        return(
            <div className='content-body'>
                {
                    contactList && 
                    contactList.length !== 0 && 
                    contactList.map((contact, index) => {
                        return (
                            <div className='contact-item'>
                                <Figure key={index}>
                                    <Figure.Image className='contact-image' src={contact.imgUrl} />
                                    <Figure.Caption className='contact-text'><h1>{contact.name}</h1></Figure.Caption>
                                    <Figure.Caption className='contact-text'>{contact.position}</Figure.Caption>
                                    <Figure.Caption className='contact-text'>{contact.email}</Figure.Caption>
                                </Figure>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        contactList: state.contactData.contactList,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getContactList: () => dispatch(getContactList())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
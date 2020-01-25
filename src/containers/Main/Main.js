import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteContact, getContact, getContactID} from "../../store/action";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Container,
    Modal,
    ModalBody
} from "reactstrap";


class Main extends Component {
    state = {
        modal: false,

    };
    componentDidMount() {
        this.props.getContact()
    }
    contactHandler = (id) => {
        this.setState({modal: !this.state.modal});
        this.props.getContactID(id);
        this.setState({id})
    };
    deletedContactHandler = (id) => {
        this.props.deleteContact(id);
        this.setState({modal: !this.state.modal});
    };
    getEditHandler = (id) => {
        this.props.history.push(`/edit/${id}`)
    };
    render() {
        return this.props.contactThis && (
            <Container>
                <div style={{display: "flex", flexWrap: 'wrap'}}>
                    {this.props.contactThis && Object.keys(this.props.contactThis).map((item, index) => (
                        <Card
                            key={index}
                            style={{margin: '10px', width: "30%"}}>
                            <CardImg style={{width: '100%', height: '250px'}} top width="100%"
                                     src={this.props.contactThis[item].addUrl} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle><h4>{this.props.contactThis[item].name}</h4></CardTitle>
                            </CardBody>
                            <Button onClick={() => this.contactHandler(item)}>Watch Info</Button>
                        </Card>
                    ))}
                </div>
                <Modal isOpen={this.state.modal} toggle={this.contactHandler}>
                    <ModalBody>
                        <Card style={{margin: '10px auto', width: "100%"}}>
                            <CardImg top width="100%" src={this.props.contact.addUrl} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle><h3>{this.props.contact.name}</h3></CardTitle>
                                <CardSubtitle>{this.props.contact.email}</CardSubtitle>
                                <CardText>{this.props.contact.phone}</CardText>
                                <Button onClick={() => this.getEditHandler(this.state.id)}
                                        style={{margin: '5px'}}>Edit</Button>
                                <Button onClick={() => this.deletedContactHandler(this.state.id)}
                                        style={{margin: '5px'}}>Deleted</Button>
                            </CardBody>
                        </Card>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    contactThis: state.contacts,
    contact: state.contact
});
const mapDispatchToProps = dispatch => {
    return {
        getContact: () => dispatch(getContact()),
        getContactID: (id) => dispatch(getContactID(id)),
        deleteContact: (id) => dispatch(deleteContact(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

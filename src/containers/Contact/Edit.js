import React, {Component} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {editContact} from "../../store/action";

class Edit extends Component {
    state={
        addUrl: '',
        name: '',
        phone: '',
        email: '',
    };
    addUrl = (e) => {
        this.setState({addUrl: e.target.value})
    };
    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };
    getHomeHandler = (id, data) => {
        this.props.editContact(id, data);
        this.props.history.push('/')
    };
    componentDidMount() {
        this.setState({addUrl: this.props.editContactThis.addUrl, name: this.props.editContactThis.name,phone: this.props.editContactThis.phone,email: this.props.editContactThis.email})
    }

    render() {
        return (
            <Container>
                <div
                    style={{width: "75%", border: '2px solid black', padding: '10px', margin: '0 auto'}}>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input onChange={this.onChangeHandler} defaultValue={this.state.name} type="name" name="name" id="name" placeholder="Enter Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input onChange={this.onChangeHandler} defaultValue={this.state.phone} type="phone" name="phone" id="phone" placeholder="Enter phone"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input onChange={this.onChangeHandler} defaultValue={this.state.email} type="email" name="email" id="email" placeholder="Enter email"/>
                        </FormGroup>
                        <FormGroup style={{display: 'flex'}}>
                            <Input
                                defaultValue={this.state.addUrl}
                                onChange={this.addUrl}
                                   type="photo"
                                   name="photo"
                                   id="photo"
                                   placeholder="Add URL"/>
                            <div
                                style={{
                                    width: '50%',
                                    height: '200px',
                                    border: '1px solid #ccc',
                                    marginLeft: '10px',
                                    borderRadius: "5px"
                                }}
                            >
                                <img style={{width: '100%',borderRadius: "5px"}} src={this.state.addUrl} alt=""/>
                            </div>
                        </FormGroup>
                        <Button onClick={() => this.getHomeHandler(this.props.match.params.id, {addUrl: this.state.addUrl, phone: this.state.phone, email: this.state.email, name: this.state.name })} style={{margin: '5px'}}>Edit</Button>
                    </Form>
                </div>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        editContactThis: state.contact
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editContact: (id, data) => dispatch(editContact(id, data))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
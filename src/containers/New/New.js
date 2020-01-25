import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {connect} from "react-redux";
import {fetchPostContact} from "../../store/action";

class New extends Component {
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
    addContact = (data) => {
        this.props.fetchPostContact(data);
        this.props.history.push('/')
    };
    render() {
        return (
            <Container>
                <div
                    style={{
                        width: "75%",
                        border: '2px solid black',
                        padding: '10px',
                        margin: '0 auto'
                    }}
                >
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input onChange={this.onChangeHandler} type="name" name="name" id="name" placeholder="Enter Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input onChange={this.onChangeHandler} type="phone" name="phone" id="phone" placeholder="Enter phone"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input onChange={this.onChangeHandler} type="email" name="email" id="email" placeholder="Enter email"/>
                        </FormGroup>
                        <FormGroup style={{display: 'flex'}}>
                            <Input onChange={this.addUrl}
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
                        <Button onClick={() => this.addContact(this.state)} style={{margin: '5px'}}>Save</Button>
                        <Button style={{margin: '5px'}}>Back to contact</Button>
                    </Form>
                </div>
            </Container>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchPostContact: (data) => dispatch(fetchPostContact(data))
    }
};
export default connect(null, mapDispatchToProps)(New);


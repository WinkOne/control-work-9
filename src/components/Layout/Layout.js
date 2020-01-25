import React from 'react';
import {Navbar, NavbarText,} from 'reactstrap';
import {NavLink} from "react-router-dom";


const Layout = (props) => {

    return (
        <div>
            <header>
                <Navbar color="light" light expand="md">
                    <NavLink to={"/"} style={{margin: '10px', textDecoration: 'none'}}><h2 style={{color: 'black'}}>Contacts</h2></NavLink>
                    <NavbarText style={{margin: '10px'}}><NavLink to={"/new-"}>Add new contact</NavLink></NavbarText>
                </Navbar>
            </header>
            <main>
                {props.children}
            </main>
        </div>


    );
};

export default Layout;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
// TODO: Refactor the 'find a vet' button into a component

class Navigation extends React.Component {
    render() {
        if (this.props.navBarHidden) {
            return (null);
        }
        return (
            <Navbar className="navbar navbar-light" variant="light">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">Team</Nav.Link>
                    <Nav.Link href="/Appointments">Appointments</Nav.Link>
                    <Nav.Link href="/maps">Find a Vet</Nav.Link>
                </Nav>
                <NavDropdown title="Dashboards" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/user/dashboard">Pet Owner</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="LogIn" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/vetlogin">Vet LogIn</NavDropdown.Item>
                    <NavDropdown.Item href="/petlogin">Pet LogIn</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="SignUp" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/vetsignup">Vet SignUp</NavDropdown.Item>
                    <NavDropdown.Item href="/petsignup">Pet SignUp</NavDropdown.Item>
                </NavDropdown>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark">Find a vet</Button>
                </Form>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navBarHidden: state.navBarHidden
    }
}

export default connect(mapStateToProps, null)(Navigation);
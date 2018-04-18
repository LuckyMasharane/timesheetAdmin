import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


class HeaderLinks extends Component{
    constructor(props)
    {
        super(props)  
        this.state={
         user : ''
        }
    };
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">1</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1}>
                        <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                    
                </Nav>
                <Nav pullRight>
                   
                    <NavItem href="/api/user/logout"><i className="pe-7s-unlock"></i> Log out</NavItem>
                </Nav>
            </div>
        );
    }
}
function matchStateToProps(state){
    
    return {
      user: state.auth
    }
  }

export default withRouter(connect(matchStateToProps)(HeaderLinks));

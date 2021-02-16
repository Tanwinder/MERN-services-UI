import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import LogoutHeader from '../presentational/LogoutHeader'
import LoginHeader from '../presentational/LoginHeader'

const Header = (props) => {
    const { userInfo, addCreditClick, loadingCredits } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">MERN-APP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        </Nav>
        <Nav className="ml-sm-auto" navbar>
          {
            userInfo ?
            <LoginHeader userInfo={userInfo} addCreditClick={addCreditClick} loadingCredits={loadingCredits}/>
            :
            <LogoutHeader />
          }
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
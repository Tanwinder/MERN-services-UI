import React, { useState } from 'react';
import { useDispatch,  } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import LogoutHeader from './LogoutHeader'
import LoginHeader from './LoginHeader'
import { getFetchUser } from '../../actions/fetchUser';

const Header = (props) => {
  const { userInfo, addCreditClick, loadingCredits } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  // userInfo={userInfo} addCreditClick={addCreditClick} loadingCredits={loadingCredits}

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
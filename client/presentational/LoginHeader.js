import React from 'react'
import { NavItem, NavLink, NavbarText, Button, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function LoginHeader({userInfo, addCreditClick, loadingCredits}) {
    return (
        <React.Fragment>
            <NavItem>
                <NavbarText>
                    <Link to="/userInfo">{ `Hello ${userInfo.displayName}` }</Link>        
                </NavbarText>
            </NavItem>
            <NavItem>
                <NavbarText>
                    <Button color="primary" onClick={addCreditClick}>
                        Add Credit
                    </Button>
                </NavbarText>
            </NavItem>
            <NavItem>
                <NavbarText>
                    <div className="credit"> Credit:- {
                        loadingCredits ?
                        <Spinner />
                        :
                        userInfo.credits
                    } </div>     
                </NavbarText>
            </NavItem>
            <NavItem>
                <NavLink href="/api/logout">
                    <Button color="warning">
                    Logout
                    </Button>
                </NavLink>
            </NavItem>
        </React.Fragment>
        
    )
}

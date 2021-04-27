import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Container, CssBaseline } from '@material-ui/core'

import Header from './components/Header/Header'
import { Routes } from './routes';
import {getFetchUser, addCreditClick} from './actions/fetchUser'
import Footer from './components/Footer/Footer'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const { userInfo, loadingUser, error, addCreditClick, loadingCredits }= this.props;
        console.log("componnn this.props.userInfo-------", userInfo, loadingUser)
        return (
            <Fragment>
                <Header />
                <CssBaseline />
                <Container className="appContainer">
                    <Routes />
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userInfo: state.user.userInfo,
        loadingUser: state.user.loadingUser,
        loadingCredits: state.user.loadingCredits,
        error: state.user.error
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        fetchUser: () => dispatch(getFetchUser()),
        // addCreditClick: () => dispatch(addCreditClick())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

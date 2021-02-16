import React, { Component, Fragment } from 'react';
import Header from './components/header'
import {Routes} from './routes';
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import {getFetchUser, addCreditClick} from './actions/fetchUser'
import Loading from './presentational/loading';
class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const { userInfo, loadingUser, error, addCreditClick, loadingCredits }= this.props;
        console.log("componnn this.props.userInfo-------", userInfo, loadingUser)
        return (
            // <div>
            //     {
            //         loadingUser ?
            //         <Loading />
            //         :
            //         !!error ?
            //         <Alert color="danger">
            //             current user service is failing. Please check {`${error}`}
            //         </Alert>
            //         :
            //         <Fragment>
            //             <Header userInfo={userInfo} />
            //             <Routes />
            //         </Fragment>
            //     }
            // </div>
            <Fragment>
                <Header userInfo={userInfo} addCreditClick={addCreditClick} loadingCredits={loadingCredits} />
                <Routes />
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
        addCreditClick: () => dispatch(addCreditClick())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

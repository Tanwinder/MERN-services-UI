import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserInfo from './components/UserInfo'


export const Routes = () => {
    return(
        <Switch>
            <Route path="/userinfo" component={UserInfo} />
            <Route path="/hello" component={()=> <div>Hellooooooo</div>} />
            <Redirect to="/" />
        </Switch>
    )
}
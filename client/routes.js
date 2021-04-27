import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import UserInfo from './components/UserInfo/UserInfo'
import Auth from './components/Auth/Auth'
import { Posts } from './components/Posts/Posts';


export const Routes = () => {
    return(
        <Switch>
            <Route path="/userinfo" component={UserInfo} />
            <Route path="/auth" component={Auth} />
            <Route path="/posts" component={Posts} />
            <Route path="/" component={()=> <div>Home</div>} />
            <Redirect to="/" />
        </Switch>
    )
}
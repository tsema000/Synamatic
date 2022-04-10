import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Category from './containers/Category'
import Favourites from './containers/Favourites';
import Search from './containers/Search';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/category'} component={Category} />
                <Route exact path={'/favourites'} component={Favourites} />
                <Route exact path={'/search'} component={Search} />


            </Switch>
        </>
    );
};
export default Router;

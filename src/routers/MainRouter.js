// import packages
import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

// import redux
import { Provider } from "react-redux";
import store from "../redux";

// import pages
import Main from '../pages/Main';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import Profil from '../pages/Profile';
import NotFound from '../pages/NotFound';

const MainRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path= '/' component={Main} />
                    <Route exact path= '/product' component={Product} />
                    <Route exact path= '/product-detail/' component={ProductDetail} />
                    <Route exact path= '/login' component={Login} />
                    <Route exact path= '/profile' component={Profil} />
                    {/* <Route exact path= '/news-category/:category' component={News} /> */}
                    <Route component={NotFound} />

                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoutes;
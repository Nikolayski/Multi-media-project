import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import  Home   from './components/Home/Home';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import Cars from './components/Cars/Cars';
import  AddCar  from './components/Cars/AddCar/AddCar';
import Blogs from './components/Blogs/Blogs';
import AddBlog from './components/Blogs/AddBlog/AddBlog';
import BlogDetails from './components/Blogs/BlogDetails/BlogDetails';
import CarDetails from './components/Cars/CarDetails/CarDetals';
import MyCars from './components/Cars/MyCars/MyCars';
import MyBlogs from './components/Blogs/MyBlogs/MyBlogs';
import Edit from './components/Edit/Edit';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

export default class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={ About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/cars' component={Cars} />
                    <Route exact path='/addCar' component={AddCar} />
                    <Route exact path='/myCars' component={MyCars} />
                    <Route exact path='/carDetails/:id' component={CarDetails} />
                    <Route exact path='/blogs' component={Blogs} />
                    <Route exact path='/addBlog' component={AddBlog} />
                    <Route exact path='/myBlogs' component={MyBlogs} />
                    <Route exact path='/blogDetails/:id' component={BlogDetails} />
                    <Route exact path='/edit/:type/:id' component={Edit} />
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                </Switch>
            </Layout>
        );
    }
}


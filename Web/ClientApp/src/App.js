import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import Cars from './components/Cars';
import { AddCar } from './components/AddCar';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/cars' component={Cars} />
        <Route exact path='/addCar' component={AddCar} />
        <Route exact path='/addBlog' component={AddBlog} />
        <Route exact path='/blogDetails/:id' component={BlogDetails} />
        <Route exact path='/blogs' component={Blogs } />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}

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
import Edit from './components/Edit/Edit';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MyCollection from './components/MyCollection/MyCollection';
import Details from './components/Details/Details';
import Products from './components/Products/Products';
import AddProduct from './components/Products/AddProduct/AddProduct';

export default class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={ About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/addProduct' component={AddProduct} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/cars' component={Cars} />
                    <Route exact path='/addCar' component={AddCar} />
                    <Route  key={'carDetals' } path='/carDetails/:id' component={Details} />
                    <Route  key={'blogDetals'} path='/blogDetails/:id' component={Details} />
                    <Route  key={'productsDetals'} path='/productDetails/:id' component={Details} />
                    <Route exact path='/blogs' component={Blogs} />
                    <Route exact path='/addBlog' component={AddBlog} />
                    <Route key={'carsCollection' } path='/myBlogs' component={MyCollection} />
                    <Route key={'blogsCollection'}  path='/myCars'component={MyCollection} />
                    <Route key={'productsCollection'}  path='/myProducts'component={MyCollection} />
                    <Route exact path='/edit/:type/:id' component={Edit} />
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                </Switch>
            </Layout>
        );
    }
}


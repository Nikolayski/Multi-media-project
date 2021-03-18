import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddBlog from './AddBlog';
import axios from 'axios';
import Blog from './Blog';

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }

    componentDidMount() {
        this.setState({ blog: [] });
        axios.get('/api/blogs/allblogs').then(response => {
            for (var i = 0; i < response.data.length; i++) {
                var currBlog = this.state.blog;
                currBlog.push(response.data[i]);
                this.setState({
                    blog: currBlog
                })
            }
        })
    }

    showTheme(event) {
        if (event.target.value == "all" || event.target.value== "ERROR") {
            this.componentDidMount();
        }
        else {
            axios.post('/api/blogs/' + event.target.value).then(response => {
                this.setState({ blog: [] })
                for (var i = 0; i < response.data.length; i++) {
                    var currBlog = this.state.blog;
                    currBlog.push(response.data[i]);
                    this.setState({
                        blog: currBlog
                    })
                }
            })
                .catch(err => console.log(err.message));
        }
      
    }


    render() {
        return (
            <section>
                <select onChange={this.showTheme.bind(this)} placeholder="Show theme:">
                    <option value="ERROR">Choose your theme</option>
                    <option value="photography">Photography</option>
                    <option value="sports">Sports</option>
                    <option value="movies">Movies</option>
                    <option value="news">News</option>
                    <option value="space">Space</option>
                    <option value="holidays">Holidays</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="history">History</option>
                    <option value="all">All</option>
                </select>
                <Link className="addblog-button" to="/addBlog">Add Blog</Link>
                <article className="car-card-wrapper">
                    {this.state.blog.map(x => (
                        <Blog key={x.id} id={x.id} theme={x.theme} title={x.title} image={x.image} description={x.description} creator={x.creatorUsername} />
                    ))}
                </article>
            </section>
        )
    }
}
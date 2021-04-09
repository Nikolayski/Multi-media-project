import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import Blog from '../Blogs/Blog/Blog';
import Car from '../Cars/Car/Car';
import * as services from '../../Services/ComponentServices';

export default class MyCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myColl: [],
            userId: ''
        }
    }

    componentDidMount() {
        let collectionType = this.props.match.path.slice(3, this.props.match.path.length);
        authService.getUser().then(response => {
            this.setState({ userId: response.sub })
            services.getMyCollection(this.state.userId, collectionType + '/my-' + collectionType)
                .then(data => this.setState({ myColl: data }))
                .catch(err => console.log(err.message))
        });
    }

    render() {
        if (this.state.myColl.length == 0) {
            return <h1 style={{ display: 'flex', justifyContent: 'center', color: 'whitesmoke' }}>No {this.props.match.path.slice(3, this.props.match.path.length)}  yet!</h1>
        }

        if (this.props.match.path == "/myBlogs") {
            return (
                <article className="blog-card-wrapper">
                    {this.state.myColl.map(x => (
                        <Blog
                            key={x.id}
                            id={x.id}
                            theme={x.theme}
                            title={x.title}
                            image={x.image}
                            description={x.description}
                            creator={x.creatorUsername}
                            edit="true"
                            remove="true"
                        />
                    ))}
                </article>
            )
        }

        return (
            <div>
                <section className="car-card-wrapper">
                    {this.state.myColl.map(x => (
                        <Car key={x.id}
                            id={x.id}
                            manufacturer={x.manufacturer}
                            model={x.model}
                            image={x.image}
                            year={x.year}
                            price={x.price}
                            contact={x.contact}
                            owner={x.ownerUsername}
                            ratingUp={x.ratingUp}
                            ratingDown={x.ratingDown}
                            edit="true"
                            remove="true"
                        />
                    ))}
                </section>
            </div>
        )
    }
}


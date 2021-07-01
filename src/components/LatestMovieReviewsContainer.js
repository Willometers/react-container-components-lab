import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'KwNtMayLRJLbhmFasTJGmmIyVkJ3kVMR';
const URL = 'api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=KwNtMayLRJLbhmFasTJGmmIyVkJ3kVMR'

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()
    

    this.state = {
        reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(res => {
            this.setState({
                reviews: res.results
            })
        })
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
               {this.state.reviews}
            </div>
        )
    }

    
}

export default LatestMovieReviewsContainer

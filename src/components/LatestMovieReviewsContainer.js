import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KwNtMayLRJLbhmFasTJGmmIyVkJ3kVMR';
const URL = 'https://api.nytimes.com/svc/movies/v2/rxeviews/all.json?'
            + `api-key=${KwNtMayLRJLbhmFasTJGmmIyVkJ3kVMR}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {

        })
    }



    render() {
        return (
            <div className='latest-movie-reviews'>
            
            </div>
        )
    }

}

export default LatestMovieReviewsContainer

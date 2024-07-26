import React from 'react'
import Hero from '../ComponentsIo/Hero';
import MoviesRow from '../ComponentsIo/MoviesRow';
import endpoints from '../Services/movieServices';


const Home = () => {
  return <>
    <Hero/>
    <MoviesRow title='upcoming' url={endpoints.upcoming}/>
    <MoviesRow title='trending' url={endpoints.trending}/>
    <MoviesRow title='top rated' url={endpoints.topRated}/>
    <MoviesRow title='comedy' url={endpoints.comedy}/>
    <MoviesRow title='popular' url={endpoints.popular}/>
  </>
};

export default Home;

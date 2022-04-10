import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ImgCover from '../assets/img/coverimage.png';
import ImgButton from '../assets/img/button1.png';
import Imgbutton from '../assets/img/sp-cover.png';
import { getMovies } from '../reducks/movies/selectors';
import queryString from 'query-string';
import API from '../API';
import Card from '../components/common/Card';
const api = new API();
const Home = () => {
    const parsed = queryString.parse(window.location.search);
    const [moviesComingSoon, setMoviesCommingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const selector = useSelector(state => state);
    const movies = getMovies(selector);

    useEffect(() => {
        api.getMovies({ release_type: 'Coming Soon'})
            .then(movies => {
                setMoviesCommingSoon(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ release_type: 'Newly Released' })
            .then(movies => {
                setMoviesNewReleased(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, []);
    return (
        <>
            <Header />
            <section class="cover">
                <div class="gradient">
                    <div class="coverdetails m-25">
                        <div class="row sp-coverdetails">
                            <div class="trailer m-10 row">
                                <img src={ImgButton} alt="" />
                                <a href="https://www.youtube.com/watch?v=BIhNsAtPbPI" target='blank'>
                                    <div class="p-10">Watch Trailer</div> </a>
                                
                            </div>
                            <div class="m-10">
                                <p class="date">October 1st</p>  
                                In cinemas
                            </div>
                        </div>
                        <div class="cover-description m-10">
                            <p>
                                James Bond has left active service. His peace is short-lived when Felix Leiter, an old
                                friend from the CIA, turns up asking for help, leading Bond onto the trail of a
                                mysterious villain armed with dangerous new technology.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={ImgCover} alt="" class="backgroundcover" />
                <img src={Imgbutton} class="sp-backgroundcover" alt="" />
            </section>
            <section class="content">
                <h1 class="section-heading m-20 p-10">Newly Released</h1>
                {moviesNewReleased && moviesNewReleased.results.length > 0 ? (
                    <div class="grid">
                        {moviesNewReleased.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}

                <hr class="divider" />

                <h1 class="section-heading m-20 ">Coming Soon</h1>
                {moviesComingSoon && moviesComingSoon.results.length > 0 ? (
                    <div class="grid">
                        {moviesComingSoon.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Home;

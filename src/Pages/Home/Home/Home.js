import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    useTitle('')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <div
                className="container rounded-3 d-flex justify-content-center align-items-center bg-info contact mb-5 " id="subscribe">
                <div class="mt-5 mb-5">
                    <br /><br /><br />
                    <h2 className='text-3xl ml-80'>LET'S STAY IN TOUCH</h2>
                    <p className='ml-80'>Get updates about us and more</p>
                    <form>
                        <div className="mb-1 ml-80">

                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <button type="submit" className="btn btn-primary ml-80">Submit</button>
                    </form>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
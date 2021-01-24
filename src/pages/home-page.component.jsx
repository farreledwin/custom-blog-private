import React from 'react';
import Jumbotron from '../components/jumbotron/jumbotron.component';
import CardHome from '../components/card-home/card-home.component';
import './homepage.css';
import {FaSearch} from 'react-icons/fa';

const HomePage = () => (
    <div>
        <Jumbotron/>
        <div className="container">
            <div className="search w-100 d-flex justify-content-end">
                <div className="input-group mb-3 w-20">
                    <input type="text" class="form-control" placeholder="Search posts..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2"><FaSearch/></span>
                    </div>
                </div>    
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 mt-5">
                    <CardHome/>
                </div>
                <div className="col-sm-4 mt-5">
                    <CardHome/>
                </div>
                <div className="col-sm-4 mt-5">
                    <CardHome/>
                </div>
                <div className="col-sm-4 mt-5">
                    <CardHome/>
                </div>
            </div>
        </div>
    </div>

);

export default HomePage;
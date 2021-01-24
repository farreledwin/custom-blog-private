import React from 'react';
import './jumbotron.styles.css';
import PeopleIcon from "../../assets/images/icon-orang.svg";

const Jumbotron = () => (
    <div className="jumbotron text-center">
        <div className="row">
            <div className="col-sm-6 pl-5">
                <h1 className="display-4 color-blue-050B5E font-weight-500 font-family--proxima-nova text-left"><strong>Welcome</strong> to my little <strong>story!</strong> </h1>
                <p className="lead mt-5 text-left">
                    <a className="btn color-blue-283295 btn-lg text-white font-family--proxima-nova" href="#" role="button">Learn more</a>
                </p>
            </div>
            <div className="col-sm-6">
               <img className="width-400" src={PeopleIcon} />
            </div>
        </div>
    </div>
);

export default Jumbotron;
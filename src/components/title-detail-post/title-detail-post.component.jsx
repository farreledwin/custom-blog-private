import React from 'react';
import './title-detail-post.styles.css';

const TitleDetailPost = () => (
    <div className="blog-detail-post">
        <div className="blog-name pt-5">
            <h6 className="text-center font-family--montserrat blog-name-custom">FARREL'S BLOG</h6>
        </div>
        <div className="title pt-3">
            <h1 className="width-50 m-auto text-center"><strong>H1 - Beautiful Reasons We Can't Help But Fall In Love With Hubspot.</strong></h1>
        </div>
        <div className="row justify-content-center pt-5 font-family--montserrat color-brown">
            <div className="col-sm-2 p-0 text-center">
            <span><strong>By: Farrel Juniawan</strong></span>
            </div>
            <div className="col-sm-2 text-center p-0">
            <span><strong>On: 6th October 2021</strong></span>
            </div>
            <div className="col-sm-2 text-center p-0">
            <span><strong>Story</strong></span>
            </div>
        </div>
    </div>
)

export default TitleDetailPost;
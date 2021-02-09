import React from 'react';
import './content-detail-post.styles.css';
import PostImage from '../../assets/images/apple.png';

const ContentDetailPost = () => (
    <div className="content-detail-post">
        <div className="m-auto width-50 text-center pt-5">
                <img src={PostImage} />
        </div>
        <div className="m-auto width-50 text-justify pt-5">
            <span className="font-family--poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsa qui inventore amet veritatis, iusto, quaerat ad dolorem ipsam quas vitae harum. Eius cumque veniam quis! Sequi cupiditate id iste?</span>
        </div>
    </div>
)

export default ContentDetailPost;
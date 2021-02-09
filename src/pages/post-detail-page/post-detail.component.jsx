import React from 'react';
import './postdetail.styles.css';
import TitleDetailPost from '../../components/title-detail-post/title-detail-post.component';
import ContentDetailPost from '../../components/content-detail-post/content-detail-post.component';

const PostDetail = () => (
    <div>
    <TitleDetailPost/>
    <ContentDetailPost/>
    </div>
)
export default PostDetail;
import React from 'react';
import './posts.css';
import { MoreVert } from '@material-ui/icons';
import { useState } from 'react';

export default function Post( {post} ) {
    // console.log(post);

    const [like, setLike] = useState(post.like);
    const[isliked, setIsLiked] = useState(false);

    const likeHandler  = () =>{

        setLike( isliked ? like-1: like+1);
        setIsLiked(!isliked);
    }

  return (
   <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
            <img className='postProfileImg' src="/assets/person/2.jpeg" alt="" />
             <span className="postUsername">Jane Hopkins</span>
             <span className="postTime">{post.date}</span>
            </div>
            <div className="postTopRight">
            <MoreVert/>

            </div>
        </div>
        <div className="postCenter">
        <span className="postText">{post?.desc}</span>
        <img src= {post.photo} alt="" className="postImg" />
        </div>
        <div className="postRight">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                <img src="/assets/heart.png" alt="" className="likeIcon" />
                <span className="likeCounter" > {like} likes</span>
            </div>

            <div className="postBottomRight">
                <div className="postCommentText">{post.comment} Comments</div>
            </div>
        </div>
    </div>
   </div>
  )
}

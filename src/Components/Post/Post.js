import { Avatar } from "@material-ui/core";
import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

import "./Post.css";

function Post({ name, title, description, images, profileImage, likes }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar alt={name} src={profileImage} />
        <div className="post__headerDesc">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
      {description && description.length > 0 ? (
        <div className="post__description">{description}</div>
      ) : null}

      {images && images[0] ? (
        <img className="post__image" src={images[0]} alt="Post" />
      ) : null}

      <p className="post__reactions">
        {likes === 0 ? "Be the first one to like" : `${likes} Likes`}
      </p>
      <div className="post__icons">
        <div className="post__iconDiv">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__iconDiv">
          <CommentIcon />
          <p>Comment</p>
        </div>
        <div className="post__iconDiv">
          <ShareIcon />
          <p>Share</p>
        </div>
        <div className="post__iconDiv hideIcon">
          <SendIcon />
          <p>Send</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

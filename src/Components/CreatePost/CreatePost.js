import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VideocamIcon from "@material-ui/icons/Videocam";
import DescriptionIcon from "@material-ui/icons/Description";
import ReceiptIcon from "@material-ui/icons/Receipt";

import "./CreatePost.css";

function CreatePost() {
  return (
    <div className="createPost">
      <div className="createPost__start">
        <CreateIcon />
        <p>Start a post</p>
      </div>
      <div className="createPost__icons">
        <div className="createPost__iconDiv">
          <PhotoCameraIcon className="cameraIcon" />
          <p>Photo</p>
        </div>
        <div className="createPost__iconDiv">
          <VideocamIcon className="videoIcon" />
          <p>Video</p>
        </div>
        <div className="createPost__iconDiv">
          <DescriptionIcon className="documentIcon" />
          <p>Document</p>
        </div>
        <div className="createPost__iconDiv hidearticle">
          <ReceiptIcon className="articleIcon" />
          <p>Article</p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

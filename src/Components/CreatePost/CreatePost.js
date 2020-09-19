import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VideocamIcon from "@material-ui/icons/Videocam";
import DescriptionIcon from "@material-ui/icons/Description";
import ReceiptIcon from "@material-ui/icons/Receipt";

import "./CreatePost.css";
import CreatePostModal from "./CreatePostModal";

function CreatePost() {
  const [open, setOpen] = useState(false);
  return (
    <div className="createPost">
      <CreatePostModal
        open={open}
        setOpen={setOpen}
        profileImage="https://material-ui.com/static/images/avatar/2.jpg"
        name="Rahul"
        title="Software Developer"
      />
      <div className="createPost__start" onClick={() => setOpen(true)}>
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

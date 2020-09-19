import { Avatar } from "@material-ui/core";
import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import "./ProfileCard.css";

function ProfileCard({ profileImage, name, title }) {
  return (
    <div className="profileCard">
      <div className="profileCard__bgimage"></div>
      <Avatar alt={name} className="profileCard__avatar" src={profileImage} />
      <div className="profileCard__description">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <div className="profileCard__info">
        <div className="profileCard__infoDiv">
          <p>Who viewed your profile</p>
          <p className="profileCard__infoDivNum">1002</p>
        </div>
        <div className="profileCard__infoDiv">
          <p>Views of your post</p>
          <p className="profileCard__infoDivNum">2,591</p>
        </div>
      </div>
      <div className="profileCard__bookmark">
        <BookmarkBorderIcon className="bookmark__icon" />
        <p>Saved Items</p>
      </div>
    </div>
  );
}

export default ProfileCard;

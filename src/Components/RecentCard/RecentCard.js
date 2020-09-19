import React from "react";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

import "./RecentCard.css";

function RecentCard() {
  return (
    <div className="recentCard">
      <p>Recent</p>

      <div>
        <GroupAddIcon />
        <p>Programming</p>
      </div>
      <div>
        <GroupAddIcon />
        <p>Technology</p>
      </div>
      <div>
        <GroupAddIcon />
        <p>React.js</p>
      </div>
      <div>
        <GroupAddIcon />
        <p>JavaScript</p>
      </div>
      <div>
        <GroupAddIcon />
        <p>Machine Learning</p>
      </div>

      <p className="reactCard__blueHeading">Followed Hashtags</p>

      <div>
        <svg fill="grey" height="20px" width="20px">
          <path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path>
        </svg>
        <p>coding</p>
      </div>
      <div>
        <svg fill="grey" height="20px" width="20px">
          <path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path>
        </svg>
        <p>devjobs</p>
      </div>
      <div>
        <svg fill="grey" height="20px" width="20px">
          <path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path>
        </svg>
        <p>hackathons</p>
      </div>
      <p className="recentCard__discover">Discover More</p>
    </div>
  );
}

export default RecentCard;

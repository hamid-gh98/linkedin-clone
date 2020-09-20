import React from "react";
import { ProfileCard, RecentCard } from "../../Components";
import "./LeftContainer.css";

function LeftContainer() {
  return (
    <div className="leftContainer">
      <ProfileCard />
      <RecentCard />
    </div>
  );
}

export default LeftContainer;

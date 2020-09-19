import React from "react";
import { ProfileCard } from "../../Components";
import "./LeftContainer.css";

function LeftContainer() {
  return (
    <div className="leftContainer">
      <ProfileCard
        profileImage="https://material-ui.com/static/images/avatar/2.jpg"
        name="Raja Rahul"
        title="Software Developer at IBM | Agile Learner | Full Stack web developer | Mobile Technologies"
      />
    </div>
  );
}

export default LeftContainer;

import React from "react";
import { CreatePost, Post } from "../../Components";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <CreatePost />
      <br />
      {/* <hr /> */}
      <Post
        name="Rahul"
        title="Software Developer at IBM | Agile Learner | Full Stack web developer | Mobile Technologies"
        description="Risk only if you afford to lose Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium est id hendrerit consequat. Curabitur ut ipsum sollicitudin tellus blandit pharetra sed porttitor tortor. Vestibulum nec euismod ante. Aenean quis tempus nibh, quis mattis tellus. Curabitur sit amet odio nisi. Donec ac lorem porttitor, finibus tellus ac, tristique augue. Phasellus commodo sit amet purus ac convallis. Maecenas non nisi velit.

Curabitur dolor velit, ultrices ac leo ut, vestibulum dapibus libero. Proin tincidunt nulla quis suscipit scelerisque. Aenean urna augue, mollis eu sem ut, tristique sagittis elit. Sed venenatis elementum turpis sit amet faucibus. Sed ac interdum arcu. In vestibulum risus arcu, a venenatis sem elementum ac. Etiam fringilla vel leo at pharetra. Sed aliquet risus a tincidunt ultricies. Suspendisse potenti."
        profileImage="https://material-ui.com/static/images/avatar/2.jpg"
        images={[
          "https://miro.medium.com/max/1080/1*WvN_cMrf5mENOBzu1UGIxA.jpeg",
        ]}
        likes={31}
      />
      <Post
        name="Test"
        title="Software Developer"
        description="Risk only if you afford to lose"
        profileImage="https://material-ui.com/static/images/avatar/1.jpg"
        images={[
          "https://miro.medium.com/max/1080/1*WvN_cMrf5mENOBzu1UGIxA.jpeg",
        ]}
        likes={15}
      />
      <Post
        name="Test 2"
        title="Software Developer"
        description="Risk only if you afford to lose"
        profileImage="https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg"
        images={[
          "https://miro.medium.com/max/1080/1*WvN_cMrf5mENOBzu1UGIxA.jpeg",
        ]}
        likes={1}
      />
      <Post
        name="Test 3"
        title="Software Developer"
        description="Risk only if you afford to lose"
        images={[
          "https://miro.medium.com/max/1080/1*WvN_cMrf5mENOBzu1UGIxA.jpeg",
        ]}
        likes={0}
      />
    </div>
  );
}

export default Feed;

import React, { useEffect, useState } from "react";
import "./App.css";
import { Feed, LeftContainer, RightContainer } from "./Containers";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import { CircularProgress } from "@material-ui/core";
import { Header, Login } from "./Components";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

        db.collection("users")
          .doc(authUser.uid)
          .get()
          .then((sanpshot) => {
            console.log("Data ---> ", sanpshot.data());
            dispatch({
              type: "PROFILE_DATA",
              profileData: sanpshot.data(),
            });
            setLoading(false);
          });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="app_loader">
          <CircularProgress className="app__progress" />
        </div>
      ) : user ? (
        <div>
          <Header />
          <div className="app__body">
            <LeftContainer />
            <Feed />
            <RightContainer />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { Feed, LeftContainer, RightContainer } from "./Containers";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { CircularProgress } from "@material-ui/core";
import { Login } from "./Components";

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
        setLoading(false);
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
        <div className="app__body">
          <LeftContainer />
          <Feed />
          <RightContainer />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

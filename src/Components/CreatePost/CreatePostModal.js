import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import firebase from "firebase";

import "./CreatePostModal.css";
import { storage, db } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    marginTop: "5rem",
    marginLeft: "30%",
    width: "37vw",
    // eslint-disable-next-line
    ["@media (max-width:1250px)"]: {
      width: "90vw",
      marginLeft: "5vw",
    },
    height: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid lightgray",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
  },
  avatar: {
    display: "flex",
    marginTop: "20px",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avatarDesc: {
    marginLeft: "10px",
  },
  avatarDescP: {
    border: "1px solid gray",
    padding: "5px",
    color: "gray",
    fontWeight: "600",
    marginTop: "5px",
  },
}));

export default function CreatePostModal({
  open = false,
  setOpen,
  profileImage,
  name,
  title,
}) {
  const classes = useStyles();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setDescription("");
    setImage(null);
    setLoading(false);
    setOpen(false);
  };

  const handleInputChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePost = (e) => {
    setLoading(true);
    if (image === null) {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        description: description,
        likes: 0,
        name: name,
        profileImage: profileImage,
        title: title,
      });
      handleClose();
      return;
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        setLoading(false);
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              description: description,
              likes: 0,
              name: name,
              images: [url],
              profileImage: profileImage,
              title: title,
            });
          });
        handleClose();
      }
    );
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <p className={classes.heading}>Create a Post</p>
              <IconButton>
                <ClearIcon onClick={handleClose} />
              </IconButton>
            </div>
            <div className={classes.avatar}>
              <Avatar src={profileImage} alt={name} className={classes.large} />
              <div className={classes.avatarDesc}>
                <h4>{name}</h4>
                <p className={classes.avatarDescP}>Anyone</p>
              </div>
            </div>
            <TextareaAutosize
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="modal__textArea"
              aria-label="minimum height"
              rowsMin={8}
              placeholder="What do you want to talk about?"
            />
            <div className="modal__footer">
              <label className="modal__label">
                <input
                  type="file"
                  onChange={handleInputChange}
                  accept="image/*"
                />
                <p>
                  <PhotoCameraIcon className="cameraIcon" />
                </p>
                <p>{image?.name ? image.name : "Upload an Image"}</p>
              </label>
              <Button
                disabled={
                  (description.length === 0 && image === null) || loading
                }
                onClick={handlePost}
                className="modal__postbutton"
              >
                {loading ? (
                  <CircularProgress className="modal__progess" />
                ) : (
                  "Post"
                )}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

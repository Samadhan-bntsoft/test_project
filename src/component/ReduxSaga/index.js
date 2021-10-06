import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchImagesSuccess } from "../Redux/action";
import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding:theme.spacing(5)
  },
  imageList: {
    width: '100%',
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function ReduxSaga() {
  const images = useSelector(state => state.images)
  const dispatch = useDispatch();
  const classes = useStyles();

useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
    .then((res) => {
      const data = res.data;
      dispatch(fetchImagesSuccess(data));
    });
}, [dispatch]);

  return (
    <div className={classes.root} >
      <Grid component="h2">Redux saga </Grid>

      <ImageList  className={classes.imageList} >
        
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  className={classes.icon}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     images: state.images,
//   };
// };


// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchImagesSuccess: () => {
//       axios
//         .get("https://jsonplaceholder.typicode.com/photos/")
//         .then((res) => {
//           const data = res.data;
//           dispatch(fetchImagesSuccess(data));
//         })
//         .catch((err) => {
//           console.log("something went wrong");
//         });
//     },
//   };
// };

export default ReduxSaga

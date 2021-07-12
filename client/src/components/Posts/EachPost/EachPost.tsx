import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostRequest } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { UserContext } from "src/utils/UserContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      "text-decoration": "none",
    },
    text_color: {
      color: "black",
    },
  })
);

interface EachPostProps {
  post: PostData;
}

export const EachPost: React.FC<EachPostProps> = ({ post }) => {
  const { userData } = useContext(UserContext);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Box boxShadow={1}>
        <Card>
          <Grid container>
            <Grid item md={10} sm={9} xs={8}>
              <CardActionArea>
                <CardContent>
                  <Link to={`/post/${post.postId}`} className={classes.link}>
                    <Typography variant="h5" component="h2" className={classes.text_color}>
                      {post.title}
                    </Typography>
                    <Box paddingBottom={2}>
                      <Typography variant="subtitle1" className={classes.text_color}>
                        Posted by {post.author}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {post.content}
                    </Typography>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Grid>

            {userData?.userName === post.author ? (
              <Grid item md={2} sm={3} xs container justifyContent="center" alignItems="center">
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(deletePostRequest(post.postId!))}
                  >
                    Delete
                  </Button>
                  <Button component={Link} to={`/edit/${post.postId}`} size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

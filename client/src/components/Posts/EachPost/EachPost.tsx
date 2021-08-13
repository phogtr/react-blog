import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DialogConfirm } from "src/components/utils/DialogConfirm/DialogConfirm";
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
  const [openDialog, setOpenDialog] = React.useState(false);
  const { userData } = useContext(UserContext);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  const handleDeleteConfirm = () => {
    dispatch(deletePostRequest(post.postId!));
    setOpenDialog(false);
  };

  return (
    <Grid component="article" item xs={12}>
      <Card elevation={3}>
        <Grid container>
          <Grid item md={10} sm={9} xs={8}>
            <CardActionArea>
              <CardContent>
                <Link to={`/post/${post.postId}`} className={classes.link}>
                  <Typography variant="h5" component="h2" className={classes.text_color} noWrap>
                    {post.title}
                  </Typography>
                  <Box paddingBottom={2}>
                    <Typography variant="subtitle1" className={classes.text_color}>
                      Posted by {post.author}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" component="p" noWrap>
                    {post.content}
                  </Typography>
                </Link>
              </CardContent>
            </CardActionArea>
          </Grid>
          {userData?.userId === post.authorId || userData?.isAdmin === true ? (
            <Grid item md={2} sm={3} xs container justifyContent="center" alignItems="center">
              <CardActions>
                <Box mx={1}>
                  {userData?.userId === post.authorId || userData?.isAdmin === false ? (
                    <>
                      <IconButton aria-label="edit" component={Link} to={`/edit/${post.postId}`}>
                        <EditOutlinedIcon />
                      </IconButton>
                    </>
                  ) : (
                    <></>
                  )}
                </Box>
                <Box mx={1}>
                  <IconButton aria-label="delete" onClick={() => setOpenDialog(true)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Card>
      <DialogConfirm
        openDialog={openDialog}
        prompt={"Do you want to delete this post?"}
        isDeleteBtn={true}
        handleCloseDialog={handleDeleteCancel}
        handleCloseDialogConfirm={handleDeleteConfirm}
      />
    </Grid>
  );
};

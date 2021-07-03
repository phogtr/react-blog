import mongoose from "mongoose";
import { nanoid } from "nanoid";

export interface PostDocument extends mongoose.Document {
  author: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    author: { type: String },
    title: { type: String, default: "" },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>("Post", PostSchema);

export default Post;

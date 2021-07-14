import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

export interface PostDocument extends mongoose.Document {
  authorId: UserDocument["_id"];
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
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    author: { type: String },
    title: { type: String, default: "" },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>("Post", PostSchema);

export default Post;

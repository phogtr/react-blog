import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { nanoid } from "nanoid";
import config from "../config/key";

export interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
  name: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(pw: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = async function (pw: string) {
  const user = this as UserDocument;

  // password hash or no?
  return bcrypt.compare(pw, user.password).catch((e) => {
    console.log(e);
    return false;
  });
};

// mongoose pre-hook
UserSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  // if password has not been modified (already hash) then return next() to skip
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.saltNum);
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;

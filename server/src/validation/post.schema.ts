import { object, string } from "yup";

export const createPostSchema = object({
  body: object({
    content: string().required("Content is required"),
    title: string().required("Title is required"),
  }),
});

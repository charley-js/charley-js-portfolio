import mongoose, { Schema } from "mongoose";

interface Post {
  title: string;
  content: string;
  author: string;
  created_at: Date;
  updated_at?: Date;
  image?: string;
  tags: string[];
  collection?: string;
  num?: number;
}

const schema = new Schema<Post>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: false },
  image: { type: String, required: false },
  collection: { type: String, required: false },
  num: { type: Number, required: false },
});

export const postModel = mongoose.model<Post>("Post", schema);

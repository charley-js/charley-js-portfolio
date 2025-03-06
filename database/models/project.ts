import mongoose, { Schema } from "mongoose";

export interface Project {
  title: string;
  description: string;
  tech?: string[];
  github?: string;
  live?: string;
  image?: string;
  created_at: Date;
  updated_at?: Date;
  status: string;
  stage: string;
}

const schema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: { type: [String], required: false },
  github: { type: String, required: false },
  live: { type: String, required: false },
  image: { type: String, required: false },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: false },
  status: { type: String, required: true },
  stage: { type: String, required: true },
});

const projectModel = mongoose.models.Project || mongoose.model<Project>("Project", schema);
export default projectModel;

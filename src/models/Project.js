import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    project_name: { type: String, required: true },
    brief_description: { type: String, required: true },
    website_link: { type: String },
    client: { type: String },
    industry: { type: String },
    date: { type: Date },
    role: { type: String },
    tags: [{ type: String }],
    project_images: [{ type: String }],
    picture_collage: [{ type: String }],
    client_talk: { type: String },
    client_title: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);

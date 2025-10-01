import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// GET project by ID
export async function GET(req, { params }) {
  await dbConnect();
  try {
    const project = await Project.findById(params.id);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
}

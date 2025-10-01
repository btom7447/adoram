import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// GET all projects
export async function GET() {
    await dbConnect();
    const projects = await Project.find({});
    return NextResponse.json(projects);
}

// POST a new project
export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
}

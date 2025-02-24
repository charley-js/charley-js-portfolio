import { connect } from "../../../../database/connection";
import { NextResponse, NextRequest } from "next/server";
import projectModel from "../../../../database/models/project";
import mongoose from "mongoose";

export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  const id = (await params).id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid project ID." }, { status: 400 });
    }
    await connect();
    const post = await projectModel.findById(id);

    if (!post) {
      return NextResponse.json({ success: false, message: "No post found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  const id = (await params).id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid project ID" }, { status: 400 });
    }
    await connect();
    const body = await request.json();
    body.updated_at = Date.now();
    const project = await projectModel.findByIdAndUpdate(id, { ...body }, { new: true, runValidators: true });
    if (!project) {
      return NextResponse.json({ success: false, message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}

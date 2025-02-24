import { connect } from "../../../../database/connection";
import { NextResponse, NextRequest } from "next/server";
import postModel from "../../../../database/models/post";
import mongoose from "mongoose";

export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  const id = (await params).id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid post ID" }, { status: 400 });
    }
    await connect();
    const post = await postModel.findById(id);
    if (!post) {
      return NextResponse.json({ success: false, message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Error fetching post : ${(error as Error).message}` },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  const id = (await params).id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid post ID" }, { status: 400 });
    }
    await connect();
    const body = await request.json();
    body.updated_at = Date.now();
    const post = await postModel.findByIdAndUpdate(id, { ...body }, { new: true, runValidators: true });
    if (!post) {
      return NextResponse.json({ success: false, message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  const id = (await params).id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid post ID" }, { status: 400 });
    }
    await connect();
    const post = await postModel.findByIdAndDelete(id);
    if (!post) {
      return NextResponse.json({ success: false, message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: ` Post "${post.title}" succesfully deleted.` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}

import { connect } from "../../../database/connection";
import { NextResponse, NextRequest } from "next/server";
import postModel from "../../../database/models/post";

export async function GET(): Promise<NextResponse> {
  try {
    await connect();
    const posts = await postModel.find({});
    if (!posts) {
      return NextResponse.json({ success: false, message: "No posts found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Error fetching posts : ${(error as Error).message}` },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await connect();

    const body = await request.json();
    body.created_at = Date.now();
    const post = new postModel(body);

    await post.validate();
    await post.save();

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 400 });
  }
}

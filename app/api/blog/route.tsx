import { connect } from "../../../database/connection";
import { NextResponse } from "next/server";
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

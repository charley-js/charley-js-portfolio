import { connect } from "../../../database/connection";
import { NextResponse } from "next/server";
import projectModel from "../../../database/models/project";

export async function GET(): Promise<NextResponse> {
  try {
    await connect();
    const projects = await projectModel.find({});
    if (!projects) {
      return NextResponse.json({ success: false, message: "No projects found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}

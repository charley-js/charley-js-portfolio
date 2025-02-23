import { connect } from "../../../database/connection";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    await connect();
    return NextResponse.json({ success: true, message: "MongoDB connection successful." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `MongoDB connection failed: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}

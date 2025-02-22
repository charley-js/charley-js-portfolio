import { connect } from "../../../database/connection";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    await connect();
    return NextResponse.json({ message: "MongoDB connection successful." });
  } catch (error) {
    return NextResponse.json({ message: `MongoDB connection failed: ${(error as Error).message}` }, { status: 500 });
  }
}

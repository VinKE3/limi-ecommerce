import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get user",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

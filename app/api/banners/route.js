import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { title, link, imageUrl, isActive } = await req.json();
    const newBanner = await db.banner.create({
      data: {
        title,
        link,
        imageUrl,
        isActive,
      },
    });
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to create banner",
      },
      {
        status: 500,
      }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content,
    } = await req.json();
    const newTraining = {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content,
    };
    console.log("newTraining", newTraining);
    return NextResponse.json(newTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create training",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

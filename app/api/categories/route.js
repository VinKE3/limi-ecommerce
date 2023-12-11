import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { title, slug, imageUrl, description } = await req.json();
    const newCategory = { title, slug, imageUrl, description };
    console.log("newCategory", newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create category",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

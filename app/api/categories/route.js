import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { title, slug, imageUrl, description } = await req.json();
    const newCategory = { title, slug, imageUrl, description };
    return NextResponse.json(newCategory);
    console.log(newCategory);
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

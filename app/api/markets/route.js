import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { title, slug, logoUrl, description } = await req.json();
    const newMarket = { title, slug, logoUrl, description };
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create market",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

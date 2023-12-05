import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const productData = await req.json();
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create product",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

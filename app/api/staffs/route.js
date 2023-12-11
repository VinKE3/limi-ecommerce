import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      notes,
      code,
      isActive,
    } = await req.json();
    const newStaff = {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      notes,
      code,
      isActive,
    };
    console.log("newStaff", newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create staff",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

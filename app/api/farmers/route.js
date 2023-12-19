import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      phisycalAddres,
      profileImageUrl,
      terms,
      isActive,
    } = await req.json();
    const newFarmer = {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      phisycalAddres,
      profileImageUrl,
      terms,
      isActive,
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create farmer",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

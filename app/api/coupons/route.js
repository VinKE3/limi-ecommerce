import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { title, couponCode, expiryDate, isActive } = await req.json();
    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
      },
    });
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create coupon",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const coupons = await db.coupon.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(coupons);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get coupons",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

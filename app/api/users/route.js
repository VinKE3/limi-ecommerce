import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    const { name, email, password, role } = await req.json();
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    console.log(newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "User created",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create user",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req, res) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch users",
      },
      {
        status: 500,
      }
    );
  }
}

// src/app/api/auth/signIn/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/server/config/dbConnect";
import UserModal from "@/server/models/userModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    const { userEmail, userPassword } = await request.json();

    console.log(userEmail, userPassword);

    await dbConnect();

    const user = await UserModal.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const validPassword = await bcrypt.compare(userPassword, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        provider: user.provider,
        profile: user.profile,
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    return NextResponse.json(
      {
        message: "Logged in successfully",
        token,
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          isVerified: user.isVerified,
          provider: user.provider,
          profile: user.profile,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

// src/app/api/auth/SignUp/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/server/config/dbConnect";
import UserModal from "@/server/models/userModal";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { userName, userPassword, userEmail, userPhone, userImage } =
      await request.json();

    await dbConnect();

    const existingUser = await UserModal.findOne({ userEmail });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);

    const newUser = new UserModal({
      name: userName,
      email: userEmail,
      password: hashedPassword,
      phone: userPhone,
      image: userImage,
      userRole: "user"
    });

    const savedUser = await newUser.save();

    // Exclude sensitive information from the response
    const { userPassword: _, ...userDetails } = savedUser.toObject();

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: userDetails
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

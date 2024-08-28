import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "../../../models/user";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try{
        const { email, password } = await req.json();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({ email, password: hashedPassword });

        return NextResponse.json({ message: 'User created' }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: 'Server error' }, { status: 500 });
    }
}

import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

// 🟢 GET all testimonials
export async function GET() {
  try {
    await dbConnect();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, data: testimonials },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

// 🟡 POST a new testimonial
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const { client_name, client_title, testiomony } = body;
    if (!client_name || !client_title) {
      return NextResponse.json(
        {
          success: false,
          message: "client_name and client_title are required",
        },
        { status: 400 }
      );
    }

    const testimonial = await Testimonial.create({
      client_name,
      client_title,
      testiomony,
    });

    return NextResponse.json(
      { success: true, data: testimonial },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}

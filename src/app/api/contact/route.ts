import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const recipient = "ketanwachar2000@gmail.com";

    // Format log output
    console.log("==========================================");
    console.log(`NEW CONTACT INQUIRY DISPATCHED TO: ${recipient}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || "New Website Inquiry"}`);
    console.log(`Message: ${message}`);
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      message: `Inquiry successfully logged and dispatched to ${recipient}`,
      data: { name, email, subject, recipient },
    });
  } catch (error: any) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

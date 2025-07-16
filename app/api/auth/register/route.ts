import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const API_URL =
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    "https://emotivai-server.onrender.com";

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    console.log("🔁 Backend API Status:", res.status);
    console.log("📦 Backend API Response:", data);

    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error("❌ Error during fetch:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

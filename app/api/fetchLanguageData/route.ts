import { dbConnect } from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const client = await dbConnect();
  console.log("hello");
  const db = client.db("portfolio");
  const languages = await db.collection("skill").find({ type: "language" })
  return new NextResponse(languages);
}

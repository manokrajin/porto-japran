import { db } from "@/app/firebase_config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const title = body.title;
  const doi_address = body.doi_address;
  const url = body.url;
  const description = body.description;

  if (!title || !doi_address || !url || !description) {
    return NextResponse.json({
      message: "Please Provide All Required Fields",
    });
  }

  try {
    const docRef = await addDoc(collection(db, "publication-card"), {
      title: title,
      doi_address: doi_address,
      url: url,
      description: description,
    });
    return NextResponse.json({
      message: `Data Posted with ID: ${docRef.id}`,
    });
  } catch (e) {
    return NextResponse.json({
      message: `Error: ${e.message}`,
    });
  }
}

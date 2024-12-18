import { db } from "@/app/firebase_config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
 const job_title = body.job_title;
 const company = body.company;
 const region = body.region;
 const duration = body.duration;
    const description = body.description;

    if (!job_title || !company || !region || !duration || !description) {
    return NextResponse.json({
      message: "Please Provide All Required Fields",
    });

    }

    try {
        const docRef = await addDoc(collection(db, "work-card"), {
            job_title: job_title,
            company: company,
            region: region,
            duration: duration,
            description: description
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
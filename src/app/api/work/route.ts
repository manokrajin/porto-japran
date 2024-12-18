import { db } from "@/app/firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const work = await getWork(db);
    console.log(work);
    return NextResponse.json({
      message: "Data Retrieved",
      data: work,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Data Not Retrieved",
      error: error,
    });
  }
}

async function getWork(db: any) {
  try {
    const projectCol = collection(db, "work-card");
    const projectSnapshot = await getDocs(projectCol);
    const projectList = projectSnapshot.docs.map((doc) => doc.data());
    return projectList;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
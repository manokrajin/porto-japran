import { db } from "../../firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const publication = await getPublication(db);
    console.log(publication);
    return NextResponse.json({
      message: "Data Retrieved",
      data: publication,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Data Not Retrieved",
      error: error,
    });
  }
}

async function getPublication(db: any) {
  try {
    const projectCol = collection(db, "publication-card");
    const projectSnapshot = await getDocs(projectCol);
    const projectList = projectSnapshot.docs.map((doc) => doc.data());
    return projectList;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

import { db } from "../../firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const projectList = await getProject(db);
    console.log(projectList);
    return NextResponse.json(
       {
        message : "Data Retrieved",
        data : projectList
       }
    );
    
}

async function getProject(db: any) {
    const projectCol = collection(db, 'project-card');
    const projectSnapshot = await getDocs(projectCol);
    const projectList = projectSnapshot.docs.map(doc => doc.data());    
    return projectList;
}
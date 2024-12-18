import { db } from "@/app/firebase_config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
        const title = body.title;
        const abstrak = body.abstrak;
        const image_url = body.image_url;
        const url = body.url;
      
        if (!title || !abstrak || !image_url || !url) {
          return NextResponse.json({
            message: "Please Provide All Required Fields",
          });
        }
      
        try {
          const id = await postData(db, title, abstrak, image_url, url);
          return NextResponse.json({
            message: `Data Posted with ID: ${id}`,
          
          });
        } catch (error) {
          return NextResponse.json({
            message: "Data Failed to Post",
            error: error,
          });
        }
    } catch (error) {
        return NextResponse.json({
            message: "terjadi kesalahan",
            error: error,
        });
    }
  
}

async function postData(
  db: any,
  title: string,
  abstrak: string,
  image_url: string,
  url: string
) {
    try{
        const docRef = await addDoc(collection(db, "project-card"), {
            title: title,
            abstrak_text: abstrak,
            url_img: image_url,
            url_project: url,
        });
        return docRef.id;
    }
    catch(error){
        throw error;
    }
}

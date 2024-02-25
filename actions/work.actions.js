"use server";

import { v2 as cloudinary } from "cloudinary";

import { works } from "@/constants";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  secure: true,
});

export async function fetchCloudinaryMedia() {
  try {
    const data = await cloudinary.search.expression("folder=alnahda").execute();

    const newItems = data.resources.map((resource) => {
      const name = resource.filename.split("-");
      const firstWord = name[0];

      return {
        type: resource.resource_type,
        url: resource.public_id,
        alt: "مشاريع البناء شركة النهضة في الكويت",
        category: firstWord,
      };
    });

    const cloudinaryWorks = [...works, ...newItems];

    return cloudinaryWorks;
  } catch (error) {
    console.error("Error fetching Cloudinary media:", error);
    return [];
  }
}

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
    const data = await cloudinary.search.expression("").execute();

    console.log(data);

    const newItems = data.resources.map((resource) => {
      const folders = resource.folder.split("/");
      const lastFolder = folders[folders.length - 1];

      return {
        type: resource.resource_type,
        url: resource.public_id,
        alt: "مشاريع البناء عند شركة النهضة في الكويت",
        category: lastFolder,
      };
    });

    const cloudinaryWorks = [...works, ...newItems];

    return cloudinaryWorks;
  } catch (error) {
    console.error("Error fetching Cloudinary media:", error);
    return [];
  }
}

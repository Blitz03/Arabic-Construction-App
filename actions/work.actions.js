"use server";

import { v2 as cloudinary } from "cloudinary";

import { works } from "@/constants";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  secure: true,
});

export async function fetchCloudinaryMedia(category) {
  // To search
  // const data = await cloudinary.search
  //   .expression(`folder=alnahda/${category}`)
  //   .execute();

  const data = await cloudinary.api.resources();

  const newItems = data.resources.map((resource) => {
    return {
      type: resource.resource_type,
      imageUrl: resource.public_id,
      alt: "مشاريع البناء عند شركة النهضة في الكويت",
      category: resource.folder,
    };
  });

  works.push(...newItems);

  return works;
}

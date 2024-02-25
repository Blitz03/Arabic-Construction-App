import Works from "@/components/sections/Works";
import { fetchCloudinaryMedia } from "@/actions/work.actions";

export default async function Page() {
  const cloudinaryWorks = await fetchCloudinaryMedia();

  return (
    <div className="min-h-screen">
      <Works cloudinaryWorks={cloudinaryWorks} isRoute />
    </div>
  );
}

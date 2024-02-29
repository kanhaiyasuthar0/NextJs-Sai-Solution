export async function uploadImageToCloud(image: any) {
  "use server";
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "tlgdfr2f");
    formData.append("cloud_name", "dthmtmcvm");
    console.log("🚀 ~ uploadImageToCloud ~ formData:", formData.get("file"));
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dthmtmcvm/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log("🚀 ~ uploadImageToCloud ~ data:", data);
    return data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

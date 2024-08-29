import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: "sridhar1",
    api_key: '965318861936582',
    api_secret: '0hkwaFrZeF5RzrdNOR5osOzygfI',
});

const uploadOnCloudinary = async (localFilePath) => {
    console.log("Cloudinary ");

    try {
        if (!localFilePath) return null;

        console.log("Uploading file:", localFilePath);

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });


        // File has been successfully uploaded
        console.log("File uploaded to Cloudinary:", response.url);

        // Delete the local file after upload
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);

        // Optionally remove the local file if the upload failed
        fs.unlinkSync(localFilePath);

        return null;
    }
};

export { uploadOnCloudinary };

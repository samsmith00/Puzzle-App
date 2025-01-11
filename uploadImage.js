const cloudinary = require('cloudinary').v2;

// Set up your Cloudinary configuration with your credentials
cloudinary.v2.config({ 
  cloud_name: 'dmta7qo6i', 
  api_key: '111444395538371', 
  api_secret: 'Y2t0wRjho-XouQ_k9Blww5K2v8s'
});

// Function to upload an image to Cloudinary
const uploadImageToCloudinary = async (imagePath) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath);
    console.log("Image uploaded:", result);
    return result;  // Contains the public_id and URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

// Call this function with the path of your image file
uploadImageToCloudinary('path/to/your-image.jpg');

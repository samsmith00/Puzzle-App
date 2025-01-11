// import axios from 'axios';
// import { Alert } from 'react-native';

// // Upload image to Cloudinary
// const uploadImageToCloudinary = async (imageUri: string) => {
//   const formData = new FormData();
//   formData.append('file', {
//     uri: imageUri,
//     type: 'assets/meditation-images/trees.webp', // Change this based on the image type (png, jpeg, etc.)
//     name: 'treeImage.webp', // Adjust name based on your image file name
//   });
//   formData.append('upload_preset', 'ml_default'); // Replace with your Cloudinary upload preset
//   formData.append('cloud_name', 'dmta7qo6i'); // Replace with your Cloudinary cloud name

//   try {
//     const response = await axios.post('https://api.cloudinary.com/v1_1/dmta7qo6i/image/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log('Uploaded image URL:', response.data.secure_url);
//     Alert.alert('Upload Successful', 'Image uploaded successfully!');
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     Alert.alert('Upload Failed', 'There was an error uploading the image.');
//   }
// };




// //j0fkrzrs

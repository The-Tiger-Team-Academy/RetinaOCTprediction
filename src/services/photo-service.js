import axios from "axios";

let imageController = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const uploadImage = (image) => {
  let formData = new FormData();
  formData.append("image", image);
  return new Promise(async (resolve, reject) => {
    try {
      const res = await imageController.post("uploads",formData);
      resolve(res.data);
      
    } catch (e) {
      reject(e.reject.data);
    }
  });
};

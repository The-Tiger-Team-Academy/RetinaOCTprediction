import axios from "axios";

let imageController = axios.create({
  baseURL: "http://127.0.0.1/api/uploads",
});

export const uploadImage = (image) => {
  let formData = new FormData();
  formData.append("image", image);
  return new Promise(async (resolve, reject) => {
    try {
      const res = await imageController.post(formData);
      resolve(res.data);
      
    } catch (e) {
      reject(e.reject.data);
    }
  });
};

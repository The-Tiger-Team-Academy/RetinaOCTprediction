<template >
  <body style="background-color: #f5f5f5">
    <div
      class="container justify-content-center"
      style="background-color: #f5f5f5; align-content: center"
    >
      <form method="post" enctype="multipart/form-data">
        <div class="eyephoto w-50 p-3">
          <uploadImages @change="uploadImage" :max="1" />
        </div>

        <div class="mt-4 d-grid gap-5">
          <div class="form">
            <input
              type="text"
              class="form-control"
              id="full_name"
              placeholder="Name :"
              name="name"
              v-model="name"
              style="border-color: #fdfdfd"
              required
            />
          </div>

          <!-- select -->
          <select required class="form-select" id="eyeside" v-model="eye_side">
            <option value="" disabled selected hidden>Eye side :</option>
            <option value="LEFT">LEFT</option>
            <option value="RIGHT">RIGHT</option>
          </select>

          <!-- datepicker -->
          <div>
            <Datepicker
              type="text"
              :is24="false"
              v-model="date"
              id="datepicker"
              position="right"
            ></Datepicker>
          </div>
        </div>
        <!-- button -->
        <div class="d-grid gap-3 d-md-flex justify-content-md-end mt-5">
          <button type="button" class="btn btn-default" @click="clear">
            CLEAR
          </button>
          <button type="button" class="btn btn-primary" @click="upload">
            PREDICT
          </button>
          
          
          
          
          
          
          <!-- <router-link
            class="btn btn-primary"
            to="/About"
            tag="button"
            type="submit"
            @click="upload"
            >PREDICT</router-link
          > -->
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import "@vuepic/vue-datepicker/dist/main.css";
import Datepicker from "@vuepic/vue-datepicker";
import axios from "axios";
import UploadImages from "vue-upload-drop-images";

export default {
  name: "Form",
  components: { Datepicker, UploadImages },

  setup() {
    return {};
  },
  data() {
    return {
      name: null,
      images: null,
      eye_side: null,
      date: new Date(),
    };
  },
  methods: {
    uploadImage(files) {
      this.images = files.target.files[0];
    },

    upload() {
      let imageController = axios.create({
        baseURL: "http://localhost:3000/api/app/",
      });
      let uploadImage = new FormData();
      uploadImage.append("image", this.images);
      this.createPatients();
      

      this.$swal({
        title: "Prediction!",
        text: "Please wait",
        imageUrl: "https://i.stack.imgur.com/kOnzy.gif",
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 7000,
        imageWidth: 60,
        imageHeight: 60,
        }).then (() => {
            this.$router.push('/about')
        });



      return new Promise(async (resolve, reject) => {
        try {
          const res = await imageController.post("upload", uploadImage);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      });
      
    },
    createPatients() {
      let patientsController = axios.create({
        baseURL: "http://localhost:3000/api",
      });
      let createPatients = new FormData();
      createPatients.append("patients_id", "1");
      createPatients.append("name", this.name);
      createPatients.append("eye_side", this.eye_side);
      createPatients.append("date", this.date);
      createPatients.append("upload", this.images.name);

      return new Promise(async (resolve, reject) => {
        try {
          const res = await patientsController.post("patients", {
            patients_id: "1",
            name: this.name,
            eye_side: this.eye_side,
            date: this.date,
            path: this.images.name,
          });
          resolve(res);
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.btn-default {
  background-color: #fbfbfb !important;
  color: #6e6e6e !important;
  border-color: #6e6e6e !important;
  border-width: 2px !important;
  border-radius: 15px !important;
  padding-left: 40px !important;
  padding-right: 40px !important;
}

.btn-primary {
  background-color: #ff4400 !important;
  border: #14bba6 !important;
  border-radius: 15px !important;
  padding-left: 40px !important;
  padding-right: 40px !important;
}

select:required:invalid {
  color: gray;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
}

.container[data-v-fd6e0c3d] {
  width: 210%;
  height: 250px;
  background: #f7fafc;
  border: 0.5px solid #a3a8b1;
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.container {
  width: 50%;
}
</style>

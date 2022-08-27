<template >
  <body style="background-color: #F5F5F5">
    <div
      class="container justify-content-center"
      style="background-color: #F5F5F5; align-content: center"
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
              style="border-color: #fdfdfd"
              required
            />
          </div>

          <!-- select -->
          <select required class="form-select" id="eyeside">
            <option value="" disabled selected hidden>Eye side :</option>
            <option value="LEFT">LEFT</option>
            <option value="RIGHT">RIGHT</option>
          </select>

          <!-- datepicker -->
          <div>
            <Datepicker type="text" :is24="false"  v-model="date" id="datepicker" position="right"></Datepicker>
          </div>
        </div>
        <!-- button -->
        <div class="d-grid gap-3 d-md-flex justify-content-md-end mt-5">
          <button type="button" class="btn btn-default" @click="clear">
            CLEAR
          </button>
          <router-link
            class="btn btn-primary"
            to="/About"
            tag="button"
            type="submit"
            @click="upload()"
            >PREDICT</router-link
          >
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import '@vuepic/vue-datepicker/dist/main.css'
import Datepicker from '@vuepic/vue-datepicker';
import axios from "axios";
import UploadImages from "vue-upload-drop-images";
import { ref } from 'vue';

export default {
  name: "Form",
  components: { Datepicker, UploadImages },
  setup() {
    function uploadImage(files) {
      console.log(files.target.files[0]);
      upload(files.target.files[0]);
      if (typeof image === "string") {
        this.image = image;
      } else {
        // this.file = image.target.files[0];
      }
    }

     const date = ref(new Date());

    function upload(files) {
      console.log(files);
      let imageController = axios.create({
        baseURL: "http://localhost/api/",
      });

      let formData = new FormData();
      formData.append("image", files);
      console.log("upload");

      return new Promise(async (resolve, reject) => {
        try {
          const res = await imageController.post("uploads", formData);
          console.log(res);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      });
    }

    function upload() {
      var full_name = document.getElementById("full_name").value;
      var eyeside = document.getElementById("eyeside").value;
      var datepicker = document.getElementById("datepicker").value;

      localStorage.setItem("Full_name", full_name);
      localStorage.setItem("Eyeside", eyeside);
      localStorage.setItem("Date", datepicker);
      
    }

    return {
      upload,
      uploadImage,
      date: null,
    };
  },
  data() {
    return {
      date: {},
      dateGreg: {},
      files: [],
      images: {},
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.btn-default {
  background-color: #fbfbfb !important;
  color: #6E6E6E !important;
  border-color: #6E6E6E !important;
  border-width: 2px !important;
  border-radius: 15px !important;
  padding-left: 40px !important;
  padding-right: 40px !important;
}

.btn-primary {
  background-color: #FF4400 !important;
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

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
          <router-link
            class="btn btn-primary"
            to="/About"
            tag="button"
            type="submit"
            @click="upload"
            :uploadImage="upload"
            >PREDICT</router-link
          >
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
      images: null,
      date: new Date(),
    };
  },
  methods: {
    uploadImage(files) {
      console.log(this.date);
      this.images = files.target.files[0];
      console.log(this.images);
    },
    upload() {
      console.log(this.images);
      let imageController = axios.create({
        baseURL: "http://192.168.1.98:3000/api/app/upload/",
      });

      let formData = new FormData();
      formData.append("image", this.images);

      return new Promise(async (resolve, reject) => {
        try {
          const res = await imageController.post("image", formData);
          console.log(res);
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

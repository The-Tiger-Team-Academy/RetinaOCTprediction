<template >
  <body style="background-color: #def8f6">
    <div
      class="container d-flex justify-content-center"
      style="background-color: #def8f6; align-content: center"
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
              id="name"
              placeholder="Name :"
              name="name"
              style="border-color: #fdfdfd"
            />
          </div>

          <!-- select -->
          <select required class="form-select">
            <option value="" disabled selected hidden>Eye side :</option>
            <option value="LEFT">LEFT</option>
            <option value="RIGHT">RIGHT</option>
          </select>

          <!-- datepicker -->
          <div>
            <Datepicker lang="en" position="right" class="" />
          </div>
        </div>
        <!-- button -->
        <div class="d-grid gap-3 d-md-flex justify-content-md-end mt-5">
          <button type="button" class="btn btn-default" @click="clear">
            CLEAR
          </button>

          <button class="btn btn-primary" type="submit" @click="upload">
            PREDICT
          </button>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import "vue-datepicker-ui/lib/vuedatepickerui.css";
import VueDatepickerUi from "vue-datepicker-ui";
import axios from "axios";
import UploadImages from "vue-upload-drop-images";

export default {
  name: "Form",
  components: { Datepicker: VueDatepickerUi, UploadImages },
  setup() {
    function uploadImage(files) {
      console.log(files.target.files[0]);
      upload(files.target.files[0])
      if (typeof image === "string") {
        this.image = image;
      } else {
        // this.file = image.target.files[0];
      }
    }

    function upload(files) {
      console.log(files)
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
    return {
      upload,
      uploadImage,
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
  color: #14bba6 !important;
  border-color: #14bba6 !important;
  border-width: 2px !important;
  border-radius: 15px !important;
  padding-left: 40px !important;
  padding-right: 40px !important;
}

.btn-primary {
  background-color: #14bba6 !important;
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
</style>
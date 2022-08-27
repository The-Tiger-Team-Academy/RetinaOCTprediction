<template>
<body>
  <nav class="navbar fixed-top sticky-top" style="background-color: #FFC65B;">
        <div class="">
            <a class="navbar-brand ps-4" href="#">
                <img src="../assets/RETINA (2).png" alt="" height="50">
            </a>
        </div>
    </nav>
    <div
      class="container justify-content-center"
      style="background-color: #F5F5F5; align-content: center"
    >
      <form method="post" enctype="multipart/form-data">
        <div class="eyephoto w-50 p-3">
          <uploadImages src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" @change="uploadImage" :max="1" />
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
            <Datepicker lang="en" position="right" class="" v-model="picked" />
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
import '@vuepic/vue-datepicker/dist/main.css'
import Datepicker from '@vuepic/vue-datepicker';
//import axios from "axios";
import UploadImages from "vue-upload-drop-images";


export default {
name: "Preview",
  components: { Datepicker, UploadImages },
  data() {
            return {
                date: null,
                picked: new Date(),
            };
        }
}
</script>

<style>
body {
    background-color: #F5F5F5;
}

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

.container{
    width: 50%;
}
</style>
<template>
  <body>
    <nav class="navbar fixed-top sticky-top" style="background-color: #ffc65b">
      <div class="">
        <a class="navbar-brand ps-4" href="#">
          <img src="../assets/RETINA (2).png" alt="" height="50" />
        </a>
      </div>
    </nav>
    <div
      class="container justify-content-center"
      style="background-color: #f5f5f5; align-content: center"
    >
      <form method="post" enctype="multipart/form-data">
        <div class="eyephoto text-center">
          <img
            class="eyephoto w-50 p-3"
            v-bind:src="image"
            v-on:="this.getPatients()"
          />
        </div>

        <div class="mt-4 d-grid gap-5">
          <div class="form">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name :"
              v-model="name"
              name="name"
              style="border-color: #fdfdfd"
              disabled
            />
          </div>
          <!-- select -->
          <select v-model="eye_side" required class="form-select" disabled>
            <option value="" disabled selected hidden>Eye side :</option>
            <option value="LEFT">LEFT</option>
            <option value="RIGHT">RIGHT</option>
          </select>

          <!-- datepicker -->
          <div>
            <Datepicker
              lang="en"
              position="right"
              class=""
              v-model="date"
              disabled
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control"
              v-model="prediction"
              disabled
            />
          </div>
        </div>
        <div class="d-grid gap-3 d-md-flex justify-content-md-end mt-5">
          <button class="btn btn-primary" @click="clear">CLEAR</button>

          <!-- <router-link
            class="btn btn-primary"
            to="/"
            tag="button"
            >CLEAR</router-link
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
import { ref, reactive, onMounted } from "vue";
import { getOverlappingDaysInIntervals } from "date-fns";

export default {
  name: "Preview",
  components: { Datepicker, UploadImages },

  setup() {},
  data() {
    return {
      name: null,
      image: null,
      eye_side: null,
      date: null,
      prediction: null,
    };
  },
  methods: {
    getPatients() {
      console.log("getPatients");
      let patientsController = axios.create({
        baseURL: "https://9d6663f31cdf.ap.ngrok.io/api/patients/",
      });

      return new Promise(async (resolves, reject) => {
        try {
          const res = await patientsController.get();
          this.image = "https://9d6663f31cdf.ap.ngrok.io/api/app/" + res.data[0].path;
          this.date = res.data[0].date;
          this.name = res.data[0].name;
          this.eye_side = res.data[0].eye_side;
          this.prediction = res.data[0].prediction;
          resolves(res.data);
        } catch (e) {
          reject(e.response.data);
        }
      });
    },

    clear() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}

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
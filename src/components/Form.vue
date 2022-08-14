<template>
  <body style="background-color: #def8f6">
    <div class="container">
      <div class="hello" style="padding-top: 20px">
      </div>

      <div class="mt-4 d-grid gap-5">
        <!-- form -->
        <div class="form">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name :"
            name="name"
            style="border-color:#fdfdfd;"
          />
        </div>

        <!-- select -->
        <select required class="form-select">
          <option value="" disabled selected hidden>Eye side :</option>
          <option value="LEFT">LEFT</option>
          <option value="RIGHT">RIGHT</option>
        </select>

        <div class="date">
          <Datepicker
            v-model="date"
            :enableTimePicker="false"
            placeholder="Date :"
          />
        </div>
      </div>
        <!-- button -->
        <div class="d-grid gap-3 d-md-flex justify-content-md-end mt-5">
          <button type="button" class="btn btn-default">CLEAR</button>
          <button  class="btn btn-primary">
            PREDICT
          </button>
        </div>
      
    </div>
  </body>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "Form",
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  },

}
</script>

<style scoped lang="scss">
.container {
  width: 50% !important;
  height: 100vh;
}

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
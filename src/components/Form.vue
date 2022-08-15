<template>
  <body style="background-color: #def8f6">
    <div class="container">
      <div class="hello" style="padding-top: 20px">
      </div>

      <div class="hello" style="background-color:#def8f6; padding-top: 20px;">    
    <picture-input 
      ref="pictureInput"
      width="700" 
      height="350" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag & Drop'
      }"
      @change="onChange">
    </picture-input>
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

        
        <!-- datepicker -->
          <div>
            <Datepicker lang="en" position="right"/>
          </div>

      </div>
        <!-- button -->
        <div class="d-grid gap-3 d-md-flex justify-content-md-end mt-5">
          <button type="button" class="btn btn-default">CLEAR</button>

          <button  class="btn btn-primary" @click="upload">
            PREDICT
          </button>
        </div>
      
    </div>
  </body>
</template>

<script>

import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';
import axios from "axios";
import PictureInput from 'vue-picture-input';

export default {
  name: "Form",
  components: { Datepicker: VueDatepickerUi, PictureInput },
  setup() {

    function upload(){
      let formData = new Formdata()
      formData.append('image', images)
      let imageController = axios.create({
        baseURL: 'http://127.0.0.1/api/uploads'
      })
      console.log(images)
      
              
        return new Promise(async (resolve, reject) => {
        try {
          const res = await imageController.post(
            formData,
          )
          resolve(res.data)
        } catch(e){
          reject(e.response.data)
        }
      })
      };
    function upload()
            {
                  let name,email,psw;
                  name=document.getElementById("username").value;
                  email=document.getElementById("eyeside").value;
                  psw=document.getElementById("date").value;

                  localStorage.setItem("name",name)
                  localStorage.setItem("eyeside",email)
                  localStorage.setItem("date",psw)
                

                  };
      function clearitem() {
        localStorage.clear();
      }

  return {
      date: null,
      upload,
    };
    
},
  data() {
    return {
      date: {}, dateGreg:{}
    };
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}


</script>

<style scoped lang="scss">
.container {
  width: 50% !important;
  height: 130vh;
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
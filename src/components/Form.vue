<template>

<body style="background-color:#def8f6">

    <div class="container">
        <div class="hello" style="padding-top:20px">    
          <picture-input 
            ref="pictureInput"
            width="500" 
            height="350" 
            margin="16" 
            accept="image/jpeg,image/png" 
            size="10" 

            :custom-strings="{
              upload: '<h1>Bummer!</h1>',
              drag: 'Dang and Drop image'
            }"
            @change="onChange">
            </picture-input>
  </div>

        <div class="mt-4 d-grid gap-3">
            <!-- form -->
            <div class="form">
                <input type="Name:" class="form-control" id="nm" placeholder="Name" name="nm">
            </div>
            
            <!-- select -->
            <select required class="form-select">
                <option value="" disabled selected hidden>Eye side</option>
                <option value="1">LEFT</option>
                <option value="2">RIGHT</option>
            </select>
            
            <div class="date">
                <Datepicker v-model="date" :enableTimePicker="false" placeholder="Date"/>
            </div>
        
            <!-- button -->
            <div class="d-grid gap-3 d-md-flex justify-content-md-end mt-3">
                <button type="button" class="btn btn-default">CLEAR</button>
                <button type="button" class="btn btn-primary">PREDICT</button>
            </div>
        </div>
    </div>
</body>
  
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name:"Form",
    components: { Datepicker },
    data() {
            return {
                date: null,
            };
        },
  }
  
    

</script>

<style scoped lang="scss">

.container{
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
    padding-right:40px !important;
}

.btn-primary{
    background-color: #14bba6 !important;
    border: #14bba6 !important;
    border-radius: 15px !important;
    padding-left: 40px !important;
    padding-right:40px !important;
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
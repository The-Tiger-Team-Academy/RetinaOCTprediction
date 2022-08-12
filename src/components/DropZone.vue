<template>
<body  style="background-color:#def8f6">
     <nav class="navbar" style="background-color: #BDEAE6;">
        <div class="">
            <a class="navbar-brand ps-4" href="#">
                <img src="../assets/RETINA (2).png" alt="" height="50">
            </a>
        </div>
    </nav>

    <div class="container">
        <div>
            <form method="post" action="#" id="#">
                <div class="form-group files color">
                    <label>Upload Your File </label>
                    <input type="file" class="form-control" multiple="">
                </div>
            </form>
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
import { ref } from "vue";
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    
    export default {
        components: { Datepicker },
        data() {
            return {
                date: null,
            };
        }
    }
</script>

<style>
.container{
    width: 50% !important;
    height: 100vh;
}
.files input {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear;
    padding: 200px 0px 100px 35%;
    text-align: center !important;
    margin: 0;
    width: 100% !important;
}

.files input:focus {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear;
    border: 1px solid #92b0b3;
}

.files {
    position: relative
}

.files:after {
    pointer-events: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50px;
    right: 0;
    height: 56px;
    content: "";
    background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
    display: block;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
}

.color input {
    background-color: #f1f1f1;
}

.files:before {
    position: absolute;
    bottom: 10px;
    left: 0;
    pointer-events: none;
    width: 100%;
    right: 0;
    height: 57px;
    content: " or drag it here. ";
    display: block;
    margin: 0 auto;
    color: #2ea591;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
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
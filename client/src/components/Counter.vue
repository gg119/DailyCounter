<template>
  <div class= "counter">
    <div class="POff">
        <h3>Austin's POff Counter is at: {{AustinCounter}} </h3>
        <form><button type="button" v-on:click="AustinIncreaseCounter">Increase Austin's Counter</button> </form>
        
    </div>
        
    <div class="ZWtf">
        <h3>Zach's WTF Counter is at: {{ZachCounter}}</h3>
         <form><button type="button" v-on:click="ZachIncreaseCounter">Increase Zach's Counter</button> </form>
    </div>
        
    <div class="RKarl">
        <h3>Karl's R Counter is at: {{KarlCounter}}</h3>
         <form><button type="button" v-on:click="KarlIncreaseCounter">Increase Karl's Counter</button> </form>
    </div>
        
  </div>
</template>

<script>
import axios from "axios";

export default {

  name: "Counter",
  data(){
      return{
          AustinCounter: null,
          ZachCounter: null,
          KarlCounter: null,
      }; 
  },

  methods: {
      AustinIncreaseCounter: function() {
          this.AustinCounter += 1;
          axios.post("/postAustin/AustinC", {
              AustinC: this.AustinCounter
          }, {
              headers: {
                  counterValue: this.AustinCounter
              }
          })
      },

      ZachIncreaseCounter: function(){
          this.ZachCounter += 1;
          axios.post("/postZach/ZachC", {
              ZachC: this.ZachCounter
          }, {
              headers: {
                  counterValue: this.ZachCounter
              }
          })
      },

      KarlIncreaseCounter: function(){
          this.KarlCounter += 1;
          axios.post("/postKarl/KarlC", {
              KarlC: this.KarlCounter
          }, {
              headers: {
                  counterValue: this.KarlCounter
              }
          })
      },

      AustinGetCount: function(){
          axios.get("/getAustin/AustinC")
            .then(result => {
                this.AustinCounter = result.data;
            })
      },

      ZachGetCount: function(){
          axios.get("/getZach/ZachC")
            .then(result => {
                this.ZachCounter = result.data;
            })
      },

      KarlGetCount: function(){
          axios.get("/getKarl/KarlC")
            .then(result => {
                this.KarlCounter = result.data;
            })
      },




  },

  mounted() {
    //   Axios.get to set equal to counters .....
        this.AustinGetCount(); this.ZachGetCount(); this.KarlGetCount();
  },
};
</script>

<style scoped>

    .POff h3, .ZWtf h3, .RKarl h3{
        margin-bottom: 1px;
    }

</style>


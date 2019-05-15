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

    <div class="RKarl">
        <h3>Get's 2 Counter is at: {{Counter2}}</h3>
         
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
          Counter2: null
      }; 
  },

  methods: {
      

      Get2Counter: function(){
          axios.get("/.netlify/functions/GetCount")
          .then(response => {
              this.Counter2 = response.data;
          })
      },

      AustinIncreaseCounter: function() {
          this.AustinCounter += 1;
          const headers = {counterValue: this.AustinCounter}

          axios.post("/postAustin/AustinC", {AustinC: this.AustinCounter}, {headers: headers})
      },

      ZachIncreaseCounter: function(){
          this.ZachCounter += 1;
          const headers = {counterValue: this.ZachCounter}
          axios.post("/postZach/ZachC", {ZachC: this.ZachCounter}, {headers: headers})
      },

      KarlIncreaseCounter: function(){
          this.KarlCounter += 1;
          const headers = {counterValue: this.KarlCounter}
          axios.post("/postKarl/KarlC", {KarlC: this.KarlCounter}, {headers: headers})
      },

      AustinGetCount: function(){
          const headers = {
              name: "AustinC"
          }
          axios.get("/.netlify/functions/GetCount", {headers: headers})
            .then(response => {
                this.AustinCounter = response.data;
            })
      },

      ZachGetCount: function(){
          const headers = {
              name: "ZachC"
          }
          axios.get("/.netlify/functions/GetCount", {headers: headers})
            .then(response => {
                this.ZachCounter = response.data;
            })
      },

      KarlGetCount: function(){
          const headers = {
              name: "KarlC"
          }
          axios.get("/.netlify/functions/GetCount", {headers: headers})
            .then(response => {
                this.KarlCounter = response.data;
            })
      },




  },

  mounted() {
    //   Axios.get to set equal to counters .....
        this.AustinGetCount(); this.ZachGetCount(); this.KarlGetCount(); this.Get1Counter(); this.Get2Counter();
  },
};
</script>

<style scoped>

    .POff h3, .ZWtf h3, .RKarl h3{
        margin-bottom: 1px;
    }

</style>


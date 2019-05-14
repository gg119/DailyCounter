<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>Our whiteboard with the "Word Of The Day" and "POff, ZWtf, and RKarl" counter's were erased, so we made an web application to replace it!</h2>
    <Counter/>
    <WordOfTheDay/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import WordOfTheDay from './components/WordOfTheDay'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Counter,
    WordOfTheDay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

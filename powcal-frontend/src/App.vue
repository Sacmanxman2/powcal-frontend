<template>
  <div id="app">
    <img src="./assets/logo.png">
    <EventList />
  </div>
</template>

<script>
import EventList from './components/EventList.vue'

export default {
  name: 'app',
  components: {
    EventList
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

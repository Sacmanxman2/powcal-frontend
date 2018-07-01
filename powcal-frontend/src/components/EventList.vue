<template>
  <div class="EventList">
    <h4 v-if="loading">Loading...</h4>
    <Event v-for="event in events" :key="event.id" :event="event"></Event>
  </div>
</template>

<script>
import { ALL_EVENTS } from '../constants/graphql.js'
import Event from './Event'

export default {
  name: 'EventList',
  data: () => ({
      events: [],
      loading: 0
    }),
  apollo: {
    events: ALL_EVENTS
  },
  components: {
    Event
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

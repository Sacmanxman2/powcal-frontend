<template>
  <div class="Event">
    <h2>{{ event.name }}</h2> 
    <h2>{{ event.startDate }} - {{ event.endDate }}</h2> 
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: ['event']
}
</script>

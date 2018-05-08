<template>
  <div>
    <h1>Hello :) </h1>
    <Listing></Listing>
  </div>
</template>

<script>
import Listing from './Listing.vue'

export default {
  name: 'Main',
  components: {
    Listing
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="container">
    <InputComponent></InputComponent>
    <Listing></Listing>
  </div>
</template>

<script>
import Listing from './Listing.vue'
import InputComponent from './InputComponent.vue'

export default {
  name: 'Main',
  components: {
    Listing,
    InputComponent
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

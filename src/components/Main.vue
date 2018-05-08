<template>
  <div class="container is-widescreen">
    <InputComponent></InputComponent>
    <Listing :listEntries="entries"></Listing>
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
      entries: [{
        'anrede': 'Frau',
        'briefanrede': 'Sehr geehrte Frau',
        'geschlecht': 'weiblich',
        'vorname': 'Sandra',
        'nachname': 'Berger'
      },
      {
        'anrede': 'Herrn Dr.',
        'briefanrede': 'Sehr geehrter Herr Dr.',
        'geschlecht': 'männlich',
        'vorname': 'Sandro',
        'nachname': 'Gutmensch'
      }]
    }
  },
  methods: {
    addEntry (entry) {
      console.log('Adding entry', entry)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

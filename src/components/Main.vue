<template>
  <div class="container is-widescreen">
    <InputComponent></InputComponent>
    <p class="control">
      <button class="button is-primary" @click="addTestEntry">
        Neuer Testdaten Eintrag
      </button>
    </p>
    <p class="control">
      <button class="button is-primary" @click="clearAllData">
        Alle Daten löschen
      </button>
    </p>
    <Listing :listEntries="entries"></Listing>
  </div>
</template>

<script>
import Listing from './Listing.vue'
import InputComponent from './InputComponent.vue'
import { Persistence } from '../services/persistence.service'

export default {
  name: 'Main',
  components: {
    Listing,
    InputComponent
  },
  data () {
    return {
      entries: []
    }
  },
  methods: {
    addEntry (entry) {
      console.log('Adding entry to store and list', entry)
      this.$data.entries.push(entry)
      Persistence.addEntry(entry)

      const newStorageData = Persistence.getAllEntries()
      console.log('new entries', newStorageData)
    },
    addTestEntry () {
      // Dummy call of the addEntry event
      this.addEntry({
        'anrede': 'Herrn Professor.',
        'briefanrede': 'Sehr geehrter Herr Professor.',
        'geschlecht': 'männlich',
        'vorname': 'Heinreich Freiherr',
        'nachname': 'vom Wald'
      })
      this.addEntry({
        'anrede': 'Herrn Dr.',
        'briefanrede': 'Sehr geehrter Herr Dr.',
        'geschlecht': 'männlich',
        'vorname': 'Sandro',
        'nachname': 'Gutmensch'
      })
      this.addEntry({
        'anrede': 'Frau',
        'briefanrede': 'Sehr geehrte Frau',
        'geschlecht': 'weiblich',
        'vorname': 'Sandra',
        'nachname': 'Berger'
      })
    },
    clearAllData () {
      Persistence.clearAllData()
      this.$data.entries = []
    }
  },
  created () {
    const storageAvailable = Persistence.isStorageAvailable()
    if (storageAvailable) {
      // Code for localStorage/sessionStorage.
      console.log('Storage supported by browser')
    } else {
      // Sorry! No Web Storage support..
      console.log('Local storage not supported')
    }

    const existingData = Persistence.getAllEntries()
    this.$data.entries = existingData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

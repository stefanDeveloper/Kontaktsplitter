<template>
  <div class="columns">
    <div class="column is-8-desktop  is-offset-2-desktop">
      <InputComponent v-on:add-entry="addEntry" ></InputComponent>
      <ListingComponent v-on:delete-entries="deleteEntries" :listEntries="entries"></ListingComponent>
    </div>
  </div>
</template>

<script>
import ListingComponent from './ListingComponent.vue'
import InputComponent from './InputComponent.vue'
import { Persistence } from '../services/persistence.service'

export default {
  name: 'MainComponent',
  components: {
    ListingComponent,
    InputComponent
  },
  data () {
    return {
      entries: []
    }
  },
  methods: {
    // Adds the given entry to the store and the list
    addEntry (entry) {
      this.$data.entries.push(entry)
      Persistence.addEntry(entry)
    },
    // Deletes the given entries
    deleteEntries (entries) {
      console.log('Deleting ' + entries.length + ' entries.')
      const newDataset = Persistence.deleteEntries(entries)
      this.$data.entries = newDataset
    }
  },
  // Called when the component is created
  // Evaluates if the local storage is available on the storage
  // Resolves the dataset from the storage if it is available
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
.columns {
  margin: 0 !important;
}
.column {
  padding: 10px !important;
}
</style>

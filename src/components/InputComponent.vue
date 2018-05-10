<template>
  <div class="columns">
      <div class="column is-four-fifths">
        <b-field type="is-success"
            message="This username is available">
            <b-autocomplete
                rounded
                v-model="inputRaw"
                :data="filteredDataArray"
                placeholder="Anrede"
                icon="magnify"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
      </div>
      <div class="column">
        <button class="button level-right" slot="trigger" :disabled="inputRaw == 0" v-on:click="buttonHandler">Übernehmen</button>
      </div>
    </div>
</template>

<script>
import { Splitter } from '../services/splitter.service.js'

export default {
  name: 'InputComponent',
  data () {
    return {
      inputRaw: '',
      entry: {
        anrede: ''
      },
      selected: null
    }
  },
  methods: {
    buttonHandler: function (event) {
      let entry = Splitter.splitRawInput(this.$data.inputRaw)
      this.$emit('add-entry', entry)
    },
    inputHandler: function (event) {
      this.$data.entry = Splitter.splitRawInput(this.$data.inputRaw)
      return ['Test']
    }
  },
  computed: {
    filteredDataArray () {
      return [this.$data.entry.anrede]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

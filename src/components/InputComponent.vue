<template>
  <div class="columns">
      <div class="column is-four-fifths">
        <b-field type="is-success"
            message="This username is available">
            <b-input v-model="inputRaw" placeholder="Anrede" maxlength="100" @input="inputHandler"></b-input>
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
      'inputRaw': ''
    }
  },
  methods: {
    buttonHandler: function (event) {
    },
    inputHandler: function (event) {
      Splitter.splitRawInput(this.$data.inputRaw)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

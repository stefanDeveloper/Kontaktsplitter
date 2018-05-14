<template>
  <div class="columns">
      <div class="column is-four-fifths">
        <b-field>
            <b-dropdown ref="dropdown" mobile-modal="false">
              <b-input
                  type="text"
                  minlength="1"
                  slot="trigger"
                  rounded
                  maxlength="100"
                  v-model="inputRaw"
                  @select="option => selected = option"
                  placeholder="Setzen Sie Ihre Anrede"
                  @input="inputHandler"
                  class="dropdown-trigger">

              </b-input>
              <b-dropdown-item disabled>
                <div class="media">
                  <small class="media-left">Briefanrede</small>
                  <div class="media-content">
                    <b-input
                    type="text"
                    v-model="entry.briefanrede"
                    minlength="1"
                    slot="trigger"
                    rounded
                    placeholder="Briefanrede"></b-input>
                  </div>
                </div>
                <div class="media">
                  <small class="media-left">Anrede</small>
                  <div class="media-content">
                    <b-input
                    type="text"
                    v-model="entry.anrede"
                    minlength="1"
                    slot="trigger"
                    rounded
                    placeholder="Anrede"></b-input>
                  </div>
                </div>
                <div class="media">
                  <small class="media-left">Vor- u. Nachname</small>
                  <div class="media-content">
                    <b-input
                    type="text"
                    v-model="entry.vorname"
                    minlength="1"
                    slot="trigger"
                    rounded
                    placeholder="Vorname">
                    </b-input><br />
                    <b-input
                    type="text"
                    v-model="entry.nachname"
                    minlength="1"
                    slot="trigger"
                    rounded
                    placeholder="Nachname"></b-input>
                  </div>
                </div>
                <div class="media">
                  <small class="media-left">Geschlecht</small>
                  <div class="media-content">
                    <b-input
                    type="text"
                    v-model="entry.geschlecht"
                    minlength="1"
                    slot="trigger"
                    rounded
                    placeholder="Geschlecht"></b-input>
                  </div>
                </div>
              </b-dropdown-item>
            </b-dropdown>
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
        anrede: '',
        briefanrede: '',
        geschlecht: '',
        vorname: '',
        nachname: ''
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
      if (this.$data.inputRaw.length == 0) {
        this.$data.entry = {
          anrede: '',
          briefanrede: '',
          geschlecht: '',
          vorname: '',
          nachname: ''
        }
      } else {
        this.$data.entry = Splitter.splitRawInput(this.$data.inputRaw)
      }
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropdown {
    width: 100%;
    display: inline-block;
  }
  .dropdown-trigger {
    width: 100%;
  }
  .dropdown .background{
    background-color: #fff;
  }
</style>

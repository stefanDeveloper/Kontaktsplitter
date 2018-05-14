<template>
  <div class="columns">
      <div class="column is-four-fifths">
        <b-field>
            <b-dropdown ref="dropdown" class="not-disabled">
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
                    v-model="entry.briefanrede"
                    rounded
                    type="text"
                    placeholder="Briefanrede"></b-input>
                  </div>
                </div>
                <div class="media">
                  <small class="media-left">Anrede</small>
                  <div class="media-content">
                    <b-input
                    v-model="entry.anrede"
                    rounded
                    type="text"
                    placeholder="Anrede"></b-input>
                  </div>
                </div>
                <div class="media">
                  <small class="media-left">Titel</small>
                  <div class="media-content">
                    <b-input
                    v-model="entry.titel"
                    rounded
                    type="text"
                    placeholder="Titel"></b-input>
                  </div>
                </div>
                <div class="media">
                  <small class="media-left">Vor- u. Nachname</small>
                  <div class="media-content">
                    <b-input
                    v-model="entry.vorname"
                    rounded
                    type="text"
                    placeholder="Vorname">
                    </b-input><br />
                    <b-input
                    v-model="entry.nachname"
                    minLength="1"
                    type="text"
                    @input="lastnameHandler"
                    rounded
                    placeholder="Nachname"></b-input>
                  </div>
                </div>
                <div class="media">
                  <small class="media-left">Geschlecht</small>
                  <div class="media-content">
                    <b-select ref="select" v-model="entry.geschlecht">
                      <option
                          v-for="gender in genders"
                          v-bind:value="gender.value"
                          :key="gender.id">
                          {{ gender.value }}
                      </option>
                    </b-select>
                  </div>
                </div>
              </b-dropdown-item>
            </b-dropdown>
        </b-field>
      </div>
      <div class="column">
        <button class="button level-right" slot="trigger" :disabled="inputRaw == '' || entry.nachname == ''" v-on:click="buttonHandler">Übernehmen</button>
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
      selected: null,
      genders: [{'id': 'männlich', 'value': 'männlich'}, {'id': 'weiblich', 'value': 'weiblich'}, {'id': '', 'value': '-'}]
    }
  },
  methods: {
    buttonHandler: function (event) {
      this.$emit('add-entry', this.$data.entry)
      this.$data.entry = {
        anrede: '',
        briefanrede: '',
        geschlecht: '',
        vorname: '',
        nachname: ''
      }
      this.$data.inputRaw = ''
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
    },
    lastnameHandler: function (event) {
      if (this.$data.entry.nachname == '' && this.$data.inputRaw.length > 0) {
        this.$snackbar.open(`Nachname kann leider nicht leer sein!`)
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
  .dropdown .dropdown-menu .dropdown-item.is-disabled, .dropdown .dropdown-menu .has-link a.is-disabled {
    cursor: auto;
    opacity: 1;
  }
  .select select {
    width: 100%;
  }
  .select {
    width: 100%;
  }
</style>

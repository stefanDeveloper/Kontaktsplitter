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
      selected: null,
      genders: [{'id': 'men', 'value': 'männlich'}, {'id': 'woman', 'value': 'weiblich'}, {'id': 'empty', 'value': '-'}]
    }
  },
  methods: {
    buttonHandler: function (event) {
      console.log(this.$data.entry)
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

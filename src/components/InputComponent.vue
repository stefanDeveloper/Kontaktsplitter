<template>
  <div class="columns">
      <div class="column is-four-fifths">
        <b-field type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="100"></b-input>
        </b-field>
      </div>
      <div class="column">
        <button class="button level-right" slot="trigger" v-on:click="buttonHandler">Übernehmen</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'InputComponent',
  data () {
    return {
      name: 'John Silver'
    }
  },
  methods: {
    buttonHandler: function (event) {
      console.log('Clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

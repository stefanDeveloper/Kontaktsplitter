<template>
  <div class="hello">
    <b-field label="Anrede"
            type="is-danger"
            message="This email is invalid">
        <b-input type="email"
            value="john@"
            maxlength="30">
        </b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

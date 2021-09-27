<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br>
    <p>
      Built with vuejs and machine learning models in javascript.<br><br><br><br>
      <input id="username" type="text" placeholder="Enter your name to proceed" v-model="username"/>
      <button type="button" class="btn btn-success" @click="loginUser()">Proceed</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      username: ""
    };
  },
  methods: {
    loginUser () {
      this.$store.dispatch('updateUserName', this.username);
      localStorage.setItem("user", this.username);
      this.$router.push('about');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
button {
  margin: 0 10px;
}
</style>

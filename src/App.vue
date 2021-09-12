<template>
    <h1>{{ title }}</h1>
    <input type="text" ref="name">
      <button @click="handleClick">Click Me!</button>
      <Modal />
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },

  data() {
    return {
      title: 'my first Vue App ;)'
    }
  },

  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active') //add a class called active to ref="name"
      this.$refs.name.focus() //focus justs goes to the ref
    
    
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

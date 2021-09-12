<template>
    <h1>{{ title }}</h1>
    <input type="text" ref="name">
    <button @click="handleClick">Click Me!</button>
    <p>Welcome...</p>

    <div v-if="showModal"> 
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links> <!-- named slot -->

          <a href="#"> Sign up now</a>
          <a href="#"> Sign up now!</a>
          <a href="#"> Sign up now!!</a>
        </template>
        <!-- default, non-named slot will go into <slot> tag -->
        <h1>Whats gooood</h1>
      </Modal>
    </div>


    <div v-if="showModalTwo"> 
      <Modal theme="sale" @close="toggleModalTwo">
        <template v-slot:links> <!-- named slot -->

          <a href="#"> Sign up now</a>
          <a href="#"> Sign up now!</a>
          <a href="#"> Sign up now!!</a>
        </template>
        <!-- default, non-named slot will go into <slot> tag -->
        <h1>PART 2</h1>
      </Modal>
    </div>

    <button @click="toggleModal"> Open Modal</button>
    <button @click="toggleModalTwo"> Open Modal</button>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },

  data() {
    return {
      title: "BEST APP ON EARTH",
      showModal: false,
      showModalTwo: false
    }
  },

  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active') //add a class called active to ref="name"
      this.$refs.name.focus() //focus justs goes to the ref    
    },

    toggleModal(){
      this.showModal =! this.showModal
    },
      toggleModalTwo(){
      this.showModalTwo =! this.showModalTwo
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
  padding-bottom: 10px;
}
</style>

<template>
  <form>
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">

      <select v-model="role">
          <option value="Manga">Manga</option>
          <option value="Anime">Anime</option>
      </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.alt='addSkill'> <!--alt prevents the comma from appearing-->
    <div v-for="skill in skills" :key="skill" class="pill">
        {{ skill }}
    </div>

    <div class= "terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms</label>
      </div>
  </form>
  <p>Email: {{ email}}</p>
  <p>Password: {{ password }} </p>
  <p>Terms: {{ terms }} </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
      return {
          email: '',
          password: '',
          role: '',
          terms: false,
          tempSkill: '',
          skills: [] as string[]
      }
  },
  methods: {
      addSkill(e: any){
        if (e.key === "," && this.tempSkill){//true if key pressed is comma and there is a value before the comma
            if (!this.skills.includes(this.tempSkill)){ //no duplicate entries
                this.skills.push(this.tempSkill) 
            } else {
                console.log("err: add a duplicate skill")
            }
            this.tempSkill = ''

            
        }
    }
  }
});
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }

  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
</style>


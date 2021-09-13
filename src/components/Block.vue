<template>
  <div class='block' v-if="showBlock">
      click me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return{
            showBlock: false,
        }
    },
    mounted(){ //once the play button is pressed
    
        setTimeout(() => {
            this.showBlock = true
        }, this.delay) //fire this function after delay
    },

    updated(){ //once the block shows and is updated
        console.log("updated")
    },

    unmounted(){ //when the block is gone (won't happen)
        console.log('unmounted')
    }
}
</script>

<style>

.block{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
}

</style>
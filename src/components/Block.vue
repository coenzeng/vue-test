<template>
  <div class='block' v-if="showBlock" @click="stopTimer">
      click me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime: 0,
            
        }
    },
    mounted(){ //once the play button is pressed
    
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay) //fire this function after delay
    },

    updated(){ //once the block shows and is updated
        console.log("updated")
    },

    unmounted(){ //when the block is gone (won't happen)
        console.log('unmounted')
    },

    methods: {
        startTimer(){//reactionTime goes up in increments of 10 milliseconds
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer(){//called when user clicks on Block
            clearInterval(this.reactionTime) //stores the value at the point of clicking
            console.log(this.reactionTime)
            this.$emit('end', this.reactionTime)//send data back to parent component
            //this.reactionTime is passed in as a parameter
        }
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
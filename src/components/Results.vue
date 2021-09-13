<template>
  <p>Reaction time: {{ score }} ms </p>
  <h3> {{ rank }} </h3>
</template>

<script>
export default {
    props: [ 'score' ],
    data(){
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 300){
            this.rank = "You're insanse Dude"
        } else {
            this.rank = "You're trash, gg ez"
        }

    
    }
}
</script>

<style>

</style>
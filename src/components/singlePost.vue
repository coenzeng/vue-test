<template>
  <div class="post">
      <router-link :to="{ name: 'Details', params: {id: post.id}}">
        <h3>{{post.title}}</h3>
        <p>{{snippet}}</p>

      </router-link>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props: ['post'],

    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0, 10) + '...'
        })

        return { snippet }
    },

  
}
</script>

<style>

</style>
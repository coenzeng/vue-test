<template>
  <h1>Home</h1>
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length">
    <PostList :posts="posts"/><!--pass posts in as a prop-->
  </div>
  <div v-else>Loading...</div>
  <!--<button @click="showPosts = !showPosts">toggle posts</button>-->
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    PostList
  },
  setup(){//this runs before any lifecycle hook
    const { posts, error, load } = getPosts() //desctructing the function

    load()

    return { posts, error } //same as { name: name, age: age }
  }
}
</script>

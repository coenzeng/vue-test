<template>
  <h1>Details page</h1>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <h2>{{ post.body }}</h2>
    <h2>{{ post.id }}</h2>
</div>
</template>

<script>
import getPost from '../composables/getPost'
export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id) //desctructing the function

        load()
        //console.log(post.title)
        return { post, error }

    }
}
</script>

<style>

</style>
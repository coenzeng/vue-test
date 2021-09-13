import {  ref } from '@vue/reactivity'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
          let data = await fetch('http://localhost:3000/bro')
          if (!data.ok){
            throw Error('nno data available')
  
          }
          posts.value = await data.json()
          console.log(posts.value)
        } catch (err) {
          error.value = err.message
        }
      }
    
      return { posts, error, load }
}

export default getPosts
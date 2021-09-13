import { ref } from '@vue/reactivity'

const getPost = (id) => {
    console.log(id)
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
          let data = await fetch('http://localhost:3000/bro/' + id)
          if (!data.ok){
            console.log("data not ok")
  
          }
          post.value = await data.json()
          //console.log(post.value)
        } catch (err) {
          error.value = err.message
          console.log("data bad")
        }
      }
    
      return { post, error, load }
}

export default getPost
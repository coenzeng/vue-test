
const app = Vue.createApp({
    //data, functions
    data() {
        return {
            showBooks: true,
            title: 'The FInal Empire',
            author: 'Coen',
            age: '18'
        }
    },
    methods: {
        changeTitle(){
            this.title = 'Diary of a Wimpy Kid'
        },
        changeShowBooks(){
            this.showBooks = !this.showBooks 
        }
    }
})

app.mount('#app')
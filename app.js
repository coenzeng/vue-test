
const app = Vue.createApp({
    //data, functions
    data() {
        return {
            url: "https://google.com",
            showBooks: true,
            books: [
                { title: 'book1', author: 'oda', isFav: true},
                { title: 'book2', author: 'oda1',isFav: true},
                { title: 'book3', author: 'oda2', isFav: true},
                { title: 'book4', author: 'oda3', isFav: false}
            ]
        }
    },
    methods: {
        changeTitle(){
            this.title = 'Diary of a Wimpy Kid'
        },
        changeShowBooks(){
            this.showBooks = !this.showBooks 
        },
        handleEve(e){
            console.log(e, e.type)
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: { //computed data depends on other data, it will change when other data changes
        filteredBooks(){ //filter books only that are favourite
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
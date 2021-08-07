const app = Vue.createApp({
    data () {
        return {
            title: "Movies Info",
            movieData: {},
            movieTitle: "", 
        }
    },
    mounted() {
        this.getMovie()
    },
    methods : {
        async  getMovie () {
            
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");
            
           const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=e2b36553&t=${search}`);

           this.movieData = res.data;
           console.log(res.data)
            
        }
        
    }
});
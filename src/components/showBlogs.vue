<template>
  <div id='show-blogs'>
      <h1>All Blog Articles</h1>
      <input type="text" v-model='search' placeholder="search blogs">
      <div v-for='blog in filteredBlogs' :key='blog.id' class="single-blog">
          <router-link v-bind:to='"/blog/"+blog.id'><h2 v-rainbow>{{ blog.title | to-uppercase}}</h2></router-link>
          <article>{{ blog.content | snippet }}</article>
      </div>

  </div>
</template>


<script>
import searchMixin from '../mixins/searchMixin';
 
export default {
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    methods: {
    
    },
    created(){
        this.$http.get('https://vue-project-f844f.firebaseio.com/posts.json').then((d)=>{
            let tempArr = [];
            for (let key in d.data){
                d.data[key].id = key;
                tempArr.push(d.data[key]);
            }
            this.blogs =[...tempArr];
        })
    },

    computed:{
        
    },

    filters:{
        toUppercase(value){
            return value.toUpperCase();
        },

        snippet(value){
            return value.slice(0,100) + '...';
        }
    },
    
    directives:{
        'rainbow':{
             bind(el){
                el.style.color = '#' + Math.random().toString().slice(2,8); 
            }
        }
    },

    mixins:[searchMixin]


}


</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
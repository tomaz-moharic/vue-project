<template>
  <div id="single-blog">
      <h1> {{ blog.title }} </h1>
      <article> {{ blog.content }} </article>
      <p>Author: {{ blog.author}} </p>
      <ul>
          <li v-for='category in blog.categories' :key='category.id'> {{ category }} </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog: {}
        }
    },

    created(){
        this.$http.get('https://vue-project-f844f.firebaseio.com/posts/'+this.id+'.json').then((data)=>{
            this.blog = data.data;
        })
    }
}
</script>

<style>

#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;

}
</style>
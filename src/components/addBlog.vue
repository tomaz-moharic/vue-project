<template>
  <div id ='add-blog'>
    <h2>Add a New Blog Post</h2>
    <form v-if='!submitted'>
      <label>Blog Title</label>
      <input type="text"  v-model.lazy='blog.title' required>
      <label for="">Blog Content</label>
      <textarea v-model.lazy='blog.content'></textarea>
      <div id="checkboxes">
        <label for="">Sandwitch Cake</label>
        <input type="checkbox" value='Sandwitch Cake' v-model='blog.categories'>
        <label for="">Silly Blog</label>               
        <input type="checkbox" value='Silly Blog' v-model='blog.categories'>
        <label for="">Platonic Blog</label>
        <input type="checkbox" value='Platonic Blog' v-model='blog.categories'>
        <label for="">Talk About Dogs</label>
        <input type="checkbox" value='Talk About Dogs' v-model='blog.categories'>
      </div>
      <label for="">Author</label>
      <select v-model='blog.author'>
        <option v-for='author in authors' v-bind:key='author.id'> {{ author }} </option>
      </select>
      <button @click.prevent='post'>Add Blog</button>
    </form>
    <div v-if='submitted'>
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }} </p>
      <p>Blog Content: {{ blog.content }} </p>
      <p>Blog Category</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key='category.id'> {{category}} </li>
      </ul>
      <p>Author: {{blog.author}} </p>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return{
      blog:{
        title: '',
        content: '',
        categories: [],
        author:''
      },
      authors: ['little poney', 'flying man', 'test me', 'you will fail'],
      submitted: false,
    }
  },
  methods: {
    post:function(){
      this.$http.post('https://vue-project-f844f.firebaseio.com/posts.json', this.blog)
      .then(()=>{
        this.submitted = true; 
      })
      .catch((error)=>{
        console.log(error);
      });
    },

  }
  

}


</script>

<style>

#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}

</style>
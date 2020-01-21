<template>
  <div class="posts container">
    <h1 class="page-header">{{user.name}} Posts</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Title</th>
        <th>Body</th>
        <th></th>
      </tr>
      </thead>
    <tbody>
      <tr v-for="posts in posts">
      <td>{{posts.title}}</td>
      <td>{{posts.body}}</td>
      <td><router-link class="btn btn-dark" v-bind:to = "'/posts/' + posts.id + '/comments/' + posts.id">Comments</router-link></td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      user: []
      
    }
  },
  methods: {
    //Get the posts for each user by user id
    fetchPosts(id){
      this.$http.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
      .then(function(response){
        this.posts = response.body;
      });
    },
    //Get the user by user user id
    fetchUser(id){
      this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(function(response){
        this.user = response.body;
      });
    }
  },
  //When page loads call functions
  created: function(){
    this.fetchPosts(this.$route.params.uId);
    this.fetchUser(this.$route.params.uId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
th{
  font-size: 25px;
}
</style>
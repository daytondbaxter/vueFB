<template>
  <div class="comments container">
    <h1 class="page-header"> Comments </h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Body</th>
        <th></th>
      </tr>
      </thead>
    <tbody>
      <tr v-for="comments in comments">
      <td>{{comments.name}}</td>
      <td>{{comments.email}}</td>
      <td>{{comments.body}}</td>
      <td></td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'comments',
    data () {
      return {
        comments: [],
        user: [],
        postData: ''
      }
    },
  methods: {
    //Get the comments by postId
    fetchComments(postId){
      this.$http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
      .then(function(response){
         this.comments = response.body;
      });
    }
  },
  //When page loads call functions
  created: function(){
    this.fetchComments(this.$route.params.cId);
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
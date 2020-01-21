<template>
  <div class="users container">
    <h1 class="page-header"> Users </h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th></th>
      </tr>
      </thead>
    <tbody>
      <tr v-for="users in users">
      <td>{{users.name}}</td>
      <td>{{users.username}}</td>
      <td>{{users.email}}</td>
      <td><router-link class="btn btn-dark" v-bind:to = "'/users/' + users.id + '/posts/'">Posts</router-link></td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'users',
    data () {
      return {
        users: []
      }
    },
  methods: {
    //Get all users
    fetchUsers(){
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        this.users = response.body;
      });
    }
  },
  //When page loads call functions
  created: function(){
    this.fetchUsers();
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

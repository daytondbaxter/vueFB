import Vue from 'vue'
import Router from 'vue-router'
import users from '@/components/users'
import posts from '@/components/posts'
import comments from '@/components/comments'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/users/:uId/posts/',
      name: 'posts',
      component: posts
    },
    {
      path: '/posts/:pId/comments/:cId',
      name: 'comments',
      component: comments
    }
  ]
})

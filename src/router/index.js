import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from '@/components/MainLayout';
import AdminLayout from '@/components/AdminLayout';
import HomePage from '@/components/pages/HomePage';
import SigninPage from '@/components/pages/SigninPage';
import SignupPage from '@/components/pages/SignupPage';
import AdminIndex from '@/components/pages/AdminIndex';
import PostDetailPage from '@/components/pages/PostDetailPage';
import AdminPostManager from '@/components/pages/AdminPostManager';
import PostForm from '@/components/post/PostForm';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: 'posts/:id',
          name: 'PostDetailPage',
          component: PostDetailPage,
          props: true,
        },
      ],
    },
    {
      path: '/my',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'AdminIndex',
          component: AdminIndex,
        },
        {
          path: 'post',
          name: 'AdminPostManager',
          component: AdminPostManager,
        },
        {
          path: 'post/create',
          name: 'PostCreate',
          component: PostForm,
          props: true,
        },
        {
          path: 'post/:id',
          name: 'PostEdit',
          component: PostForm,
          props: true,
        },
      ],
    },
    {
      name: 'Signin',
      path: '/auth/signin',
      component: SigninPage,
    },
    {
      name: 'Signup',
      path: '/auth/signup',
      component: SignupPage,
    },
  ],
});

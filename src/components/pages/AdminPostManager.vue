<template>
  <div>
    <h1>Manage Posts</h1>
    router
    <br>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostList from '@/components/post/PostList';

export default {
  name: 'AdminPostManager',
  components: { PostList },
  mounted() {
    this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts']),
  },
  computed: {
    ...mapGetters(['posts']),
  },
};
</script>

<style>

</style>

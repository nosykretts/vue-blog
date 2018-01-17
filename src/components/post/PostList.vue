<template>
    <Timeline>
      <post-card-item :manage="manage" v-for="post in posts" :key="post._id" :post="post"/>    
    </Timeline>
</template>

<script>
import PostCardItem from './PostCardItem';

export default {
  name: 'PostList',
  props: ['posts', 'manage'],
  components: { PostCardItem },
  data() {
    return {

    };
  },
};
</script>

<style>

</style>

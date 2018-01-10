<template>
    <Timeline>
      <post-card-item v-for="post in posts" :key="post._id" :post="post"/>    
    </Timeline>
</template>

<script>
import PostCardItem from './PostCardItem';

export default {
  name: 'PostList',
  props : ['posts'],
  components : { PostCardItem },
  data (){
    return {
      
    }
  }
};
</script>

<style>

</style>

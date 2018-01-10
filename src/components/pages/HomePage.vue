<template>
  <div>
    <h1>This is Home</h1>
    <br><br><br>
     <post-list :posts="posts"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostList from '@/components/post/PostList'

export default {
  name : 'HomePage',
  components : { PostList },
  data(){
    return {
      
    }
  },
  mounted(){
    this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  computed : {
    ...mapGetters(['posts'])
  }
}
</script>

<style>

</style>

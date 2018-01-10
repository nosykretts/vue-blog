<template>
  <div v-if="post">
    <img :src="post.imageUrl">
    <Card>
      <bigger><h1>{{post.title}}</h1></bigger>
      <br>
      <p><strong>Posted:</strong> {{moment(post.createdAt).fromNow()}}</p>
      <p><strong>By:</strong> {{post.creator}}</p>
      <br>
      <div class="article-content" v-html="post.article">
      </div>
      <pre>{{JSON.stringify(post, null, 2)}}</pre>
    </Card>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'PostDetailPage',
  props: ['id'],
  mounted(){
    this.getPost({
      id: this.id
    })
  },
  methods: {
    ...mapActions(['getPost'])
  },
  computed: {
    ...mapGetters(['post'])
  },
  
};
</script>

<style>
.article-content{
  margin-top: 20px;
}
.article-content p {
  margin-bottom: 15px;
}
</style>

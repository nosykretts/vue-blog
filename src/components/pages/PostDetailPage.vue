<template>
  <div v-if="post">
    <div class="image-wrapper">
      <img :src="post.imageUrl">
    </div>
    <Card>
      <big>
        <h1>{{post.title}}</h1>
      </big>
      <br>
      <p>
        <strong>Posted:</strong> {{moment(post.createdAt).fromNow()}}</p>
      <p>
        <strong>By:</strong> {{post.creator.name}}</p>
      <div class="article-content" v-html="post.article">
      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PostDetailPage',
  props: ['id'],
  mounted() {
    this.getPost({
      id: this.id,
    });
  },
  methods: {
    ...mapActions(['getPost']),
  },
  computed: {
    ...mapGetters(['post']),
  },
};
</script>

<style>
.article-content {
  margin-top: 20px;
  font-size: 120%;
}
.article-content p {
  margin-bottom: 15px;
}
.image-wrapper {
  min-height: 200px;
  margin: -30px -20px -40px -20px;
}
.image-wrapper > img {
  width: 100%;
}
</style>

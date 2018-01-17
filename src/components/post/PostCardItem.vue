<template>
  <timeline-item>{{moment(post.createdAt).fromNow()}}
    <Card v-if="manage" class="post-card-item" dis-hover>
      <h2 slot="title">{{post.title}}</h2>
      <p>
        <strong>Posted by:</strong> {{post.creator.name}}</p>
      <br>
      <router-link :to="toEdit" class="ivu-btn ivu-btn-small">Edit</router-link>

      <Poptip confirm title="Are you sure delete this post?" @on-ok="handleDelete" ok-text="yes" cancel-text="no">
        <Button size="small">Delete</Button>
      </Poptip>
    </Card>
    <Card v-if="!manage" class="post-card-item" dis-hover>
      <router-link :to="toDetail">
        <h2 class="post-card-title">{{post.title}}</h2>
      </router-link>
      <p class="content">{{post.firstParagraph}}..
        <router-link :to="toDetail">read&nbsp;more</router-link>
      </p>
    </Card>
  </timeline-item>
</template>

<script>
export default {
  props: ['post', 'manage'],
  name: 'PostCardItem',
  data() {
    return {
      toDetail: {
        name: 'PostDetailPage',
        params: { id: this.post._id }
      },
      toEdit: {
        name: 'PostEdit',
        params: { id: this.post._id }
      }
    }
  },
  methods: {
    handleDelete() {
      this.$store
        .dispatch('deletePost', {
          id: this.post._id
        })
        .then(() => {
          this.$Message.success('Post delete successfull')
        })
        .catch(console.error)
    }
  }
}
</script>

<style>
.time {
  font-size: 14px;
  font-weight: bold;
}
.post-card-title {
}
.post-card-item {
  margin-top: 5px;
  margin-bottom: 15px;
}
</style>

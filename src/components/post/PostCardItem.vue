<template>
    <timeline-item>{{moment(post.createdAt).fromNow()}}
        <br>
        <Card>
          <router-link :to="to">
              <h2 class="post-card-title">{{post.title}}</h2>
          </router-link>          
          <p class="content">{{post.firstParagraph}}.. <router-link :to="to">read&nbsp;more</router-link></p>
        </Card>
    </timeline-item>
</template>

<script>
export default {
  props : ['post'],
  name: 'PostCardItem',
  data(){
    return {
      to : {
        name : 'PostDetailPage',
        params : {id : this.post._id}
      }
    }
  }
};
</script>

<style>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .post-card-title{
      
    }
</style>

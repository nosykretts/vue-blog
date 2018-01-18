<template>
  <div v-if="editLoaded">
    <Form label-position="top">
      <FormItem label="Title">
        <Input placeholder="Post title" v-model="postForm.title"></Input>
      </FormItem>
      <FormItem  label="Image Url">
        <Input placeholder="Post Image" v-model="postForm.imageUrl"></Input>
      </FormItem>
      <FormItem label="Article Content">
        <Input type="textarea" :min="10" v-model="postForm.article"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit" size="large">SUBMIT</Button>
    </FormItem>      
    </Form>    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import editor from 'vue2-medium-editor'

export default {
  name: 'PostForm',
  props: ['id'],
  components: {
    editor
  },
  mounted() {
    console.log('mounted',)
    if (this.id) {
      this.getPost({id: this.id})
    } else {
      this.editLoaded = true
    }
  },
  data() {
    return {
      editLoaded: false,
      postForm: {
        title: '',
        imageUrl: '',
        article: ''
      }
    }
  },
  methods: {
    ...mapActions(['getPost']),
    handleSubmit() {
      let dispatch = this.id ? 'updatePost' : 'createPost'
      this.$store
        .dispatch(dispatch, {
          id: this.id,
          title: this.postForm.title,
          imageUrl: this.postForm.imageUrl,
          article: this.postForm.article
        })
        .then(newId => {
          this.$router.push({
            name: 'AdminPostManager',
            params: {
              id: this.id || newId
            }
          })
        })
    }
  },
  computed: {
    post: {
      get() {
        
        return this.$store.getters.post
      },
      set() {}
    }
  },
  watch: {
    id(newVal,OldVal){
      console.log('changed id')
    },
    post: {
      deep: true,
      handler(post) {
        this.formQuestion = {
          title: post.title,
          imageUrl: post.imageUrl,
          article: post.article,
        }
        this.editLoaded = true
      }
    }
  }
}
</script>

<style>
.editor-content {
  border: 1px solid #dddee1;
  border-radius: 4px;
  padding: 4px 7px;
  font-size: 120%;
  min-height: 220px;
}
.editor-content p {
  margin-bottom: 15px;
}
</style>

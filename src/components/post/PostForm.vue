<template>
  <div v-if="editLoaded">
    <h1>{{id? 'Edit Post': 'Create Post' }}</h1>
    <Form label-position="top">
      <FormItem label="Title">
        <Input placeholder="Post title" v-model="postForm.title"></Input>
      </FormItem>
      <FormItem  label="Image Url">
        <Input placeholder="Post Image" v-model="postForm.imageUrl"></Input>
      </FormItem>
      <FormItem label="Article Content">
         <editor v-on:edit='processEditOperation' class="editor-content" :text="id? postForm.article : ''" placeholder="Type your article"></editor>
        <!-- <Input type="textarea"  :min="10" v-html="postForm.article"></Input> -->
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
    this.fillData()
  },
  data() {
    return {
      editLoaded: false,
      postForm: {
        id: this.id,
        title: '',
        imageUrl: '',
        article: ''
      }
    }
  },
  methods: {
    ...mapActions(['getPost']),
    processEditOperation (operation) {
      this.postForm.article = operation.api.origElements.innerHTML
    },
    fillData() {
      console.log('fillData', this.id)
      if (this.id) {
        this.getPost({ id: this.id }).then(() =>{
          this.postForm = {
            ...this.$store.getters.post
          }
        })
      } else {
        this.postForm = {}
        this.editLoaded = true
      }
    },
    handleSubmit() {
      const dispatch = this.id ? 'updatePost' : 'createPost';
      this.$store.dispatch(dispatch, this.postForm).then((newId) => {
        console.log('selesai')
        this.$router.push({
          name: 'AdminPostManager',
        });
      });
    },
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
  },
  watch: {
    id(a, b) {
      this.fillData()
    },
    post(){
      this.editLoaded = true
    }
  },
};

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

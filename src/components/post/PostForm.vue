<template>
  <div>
    <Form label-position="top">
      <FormItem label="Title">
        <Input placeholder="Post title" v-model="postForm.title"></Input>
      </FormItem>
      <FormItem  label="Image Url">
        <Input placeholder="Post Image" v-model="postForm.imageUrl"></Input>
      </FormItem>
      <FormItem label="Article Content">
        <editor class="editor-content" :text='postForm.article'></editor>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" size="large">SUBMIT</Button>
    </FormItem>      
    </Form>    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import editor from 'vue2-medium-editor';

export default {
  name: 'PostForm',
  props: ['id'],
  components: {
    editor,
  },
  mounted() {
    console.log('mounted');
    if (this.id) {
    }
  },
  data() {
    return {
      postForm: {
        title: '',
        imageUrl: '',
        article: '',
      },
    };
  },
  methods: {
    ...mapActions(['getPost']),
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
  },
  computed: {
    post: {
      get() {
        return this.$store.getter('post');
      },
      set() {},
    },
  },
  watch: {
    id() {},
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

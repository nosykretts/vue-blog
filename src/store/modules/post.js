import axios from 'axios'

const state = {
  posts : [],
  post : null
}

const getters = {
  posts: state => state.posts,
  post: state => state.post
}

const actions = {
  getPosts({commit}){
    axios.get('/posts')
    .then(({data}) => {
      commit('getPostsSuccess', {
        posts : data.data
      })
    })
    .catch(err => {
      console.error(err.response.data.message)
    })  
  },
  getPost({commit}, {id}){
    return new Promise((resolve, reject) => {
      axios.get(`/posts/${id}`)
      .then(({data}) => {
        commit('getPostSuccess', {
          post : data.data
        })
        resolve()
      })
      .catch(err => {
        console.error(err.response.data.message)
        reject(err)
      })
    })
  },
  createPost({commit}){
    return new Promise((resolve, reject) => {
      axios.post('/posts')
      .then(({data}) => {
        commit('createPostSuccess', {
          post : data.data
        })
      })
      .catch(err => {
        console.error(err.response.data.message)
        reject(err)
      })
    })
  },  
  updatePost({commit}, {id, post}){
    return new Promise((resolve, reject) => {
      axios.put(`/posts/${id}`)
      .then(({data}) => {
        commit('updatePostSuccess', {
          post : data.data
        })
      })
      .catch(err => {
        console.error(err.response.data.message)
        reject(err)
      })
    })
  },
  deletePost({commit}, {id}){
    axios.delete(`/posts/${id}`)
    .then(() => {
      commit('deletePostSuccess', {id})
    })
    .catch(err => {
      console.error(err.response.data.message)
      reject(err)
    })
  }
}

const mutations = {
  getPostsSuccess(state, {posts}){
    state.posts = posts
  },
  getPostSuccess(state, {post}){
    state.post = post
  },
  createPostSuccess(state, {post}){
    state.posts = [
      ...state.posts,
      posts
    ]
  },
  updatePostSuccess(state, {post}){
    state.posts = state.posts.map(postItem => {
      if(postItem._id == post._id){
        return post
      }
      return postItem
    })
  },
  deletePostSuccess(state, {id}){
    state.posts = state.posts.filter(postItem => postItem._id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
export const state = () => ({
  posts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  createPost(state, newPost) {
    state.posts.unshift(newPost);
  }
};

export const actions = {
  async getPosts({ commit }, limit = 3) {
    const posts = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
    );
    commit('setPosts', posts);
  }
};

export const getters = {
  validPosts(state) {
    return state.posts.filter(post => post.title && post.body);
  },
  posts(state) {
    return state.posts;
  },
  postsCount(state, getters) {
    return getters.validPosts.length;
  }
};

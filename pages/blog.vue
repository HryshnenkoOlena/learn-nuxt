<template>
  <section>
    <h1 class="my-5">Blog page</h1>
    <PostForm />
    <h4 class="mb-4 text-success">Posts count: {{ postsCount }}</h4>
    <ul class="posts-list">
      <li v-for="post in validPosts" :key="post.id" class="post">
        <h3 class="post__title">{{ post.title.slice(0, 30) }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import PostForm from '@/components/PostForm';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { PostForm },
  // async fetch({store}) {                                   I refactor this code on mapActions and mounted
  //   if (store.getters['post/posts'].length === 0) {
  //     await store.dispatch('post/getPosts')
  //   }
  // },
  computed: {
    // posts() {
    //   return this.$store.getters['post/posts']             I refactor this code on mapGetters
    // }
    ...mapGetters('post', ['validPosts', 'postsCount'])
  },
  mounted() {
    this.getPosts(5);
  },
  methods: {
    ...mapActions('post', ['getPosts'])
  }
};
</script>

<style lang="scss">
.posts-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
}

.post {
  padding: 45px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.23);
  border-radius: 30px;
  margin-bottom: 40px;

  &__title {
    margin-bottom: 20px;
  }
}
</style>

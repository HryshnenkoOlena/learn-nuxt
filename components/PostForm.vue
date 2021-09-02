<template>
  <article>
    <form class="form" @submit.prevent="submitPost">
      <div class="form-group">
        <input type="text" placeholder="Type the title" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <textarea placeholder="Type the body text" class="form-control" v-model="body"></textarea>
      </div>
      
      <button type="submit" class="btn btn-primary">Create post</button>
    </form>
  </article>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapMutations('post', ['createPost']),
    submitPost() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })

      this.title = this.body = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  margin-bottom: 45px;
  background: honeydew;
  padding: 30px;
  border: 1px solid greenyellow;
  border-radius: 30px;
}

.form-group {
  font-size: 16px;
  margin-bottom: 30px;
}
</style>

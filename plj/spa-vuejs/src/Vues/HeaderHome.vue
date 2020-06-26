<template>
    <nav>
        <h2>Home</h2>
      <router-link to="/" class="link" exact-active-class="active-link">Home</router-link>
      <router-link :to="{name: 'users-id-profile', params: { id: 1}, query: {lang: 'ja', page:2}, hash: '#next-user'}" class="link" exact-active-class="active-link">Users</router-link>
        <button @click="increment(2)">+1</button>
        <button @click="decrement(2)">-1</button>
    </nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions("count",["increment","decrement"])
    }
}
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }

  .active-link {
    font-size: 20px;
  }
</style>>
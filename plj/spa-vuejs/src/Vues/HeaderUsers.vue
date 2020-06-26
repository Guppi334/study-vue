<template>
    <nav>
        <h2>Users</h2>
      <router-link to="/" class="link" exact-active-class="active-link">Home</router-link>
      <router-link :to="{name: 'users-id-profile', params: { id: 1}, query: {lang: 'ja', page:2}, hash: '#next-user'}" class="link" exact-active-class="active-link">Users</router-link>
    </nav>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }

  .active-link {
    font-size: 20px;
  }
</style>>
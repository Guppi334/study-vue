<template>
  <div>
    <LikeHeader>
      <h3>初めまして</h3>
    </LikeHeader>
    <LikeNumber :totalNumber="number" :addNumber="1" @my-click="incrementNumber($event)"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';
import About from './components/About.vue';
import Home from './components/Home.vue';

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home"
    }
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(plusNum) {
      this.number += plusNum
    }
  }
}
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
    h1{
      color: blue;
    }
</style>
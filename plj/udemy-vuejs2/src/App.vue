<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <br>
    <button @click="add">追加</button>
    <ul style="width: 200p; margine:auto;">
        <transition-group name="fade"  tag="div">
          <li v-for="(number,index) in numbers" :key="number" @click="remove(index)" style="cursor: pointer;">{{number}}</li>
        </transition-group>

    </ul>
    <br>
    <transition 
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      >
      <div class="circle" v-if="show"></div>
    </transition>
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
    <transition enter-active-class="animate_animated animate_bounce" leave-active-class="animate_animated animate_shake" appear>
      <p v-if="show">hello</p>
    </transition>
    <transition :name="myAnimation" appear> 
      <div v-show="show">
        <p>bye</p>
        <p>good morning</p>
      </div>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  components: {
    ComponentA,
    ComponentB
  },
  name: 'myAnimation',
  data() {
    return {
      numbers: [0,1,2],
      nextNumber: 3,
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponentA"
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    },
    add () {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove (index) {
      this.numbers.splice(index, 1)
    },
    beforeEnter(el){
      // 現れる前
      el.style.transform = "scale(0)";
    },
    enter(el, done){
      // 現れるとき
      let scale = 0;
      const interval = setInterval( () => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    leave(el, done){
      // 消えるとき
      let scale = 1;
      const interval = setInterval( () => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
  }
}
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-move {
  transition: transform 1s;
}
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れるときのトランザクションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
/* 現れるときの最後の状態 */
  opacity: 1;
}
.fade-leave {
/* 消えるときの最初の状態 */
  opacity: 1;
}
.fade-leave-active {
/* 消えるときのトランザクションの状態 */
  transition: opacity 0.5s;
  position: absolute;
  width: 200px;
}
.fade-leave-to {
/* 消えるときの最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to{
  opacity: 0;
}
.slide-enter-to,
.slide-leave{
  opacity: 1;
}

.slide-enter-active{
  
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active{
  
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70px;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>>

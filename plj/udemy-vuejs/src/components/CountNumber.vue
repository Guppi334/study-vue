<template>
    <div>
        <h2>{{ title | lowerCase | upperCase}}</h2>
        <h3>{{ subTitle | upperCase | lowerCase}}</h3>
        <p>{{ number }}</p>
        <button @click="number++">+1</button>
    </div>
</template>

<script>
import {tokyoNumber} from "@/tokyoNumber";

export default {
    mixins: [tokyoNumber],
    data() {
        return {
            title: "Welcome to Los!"
        }
    },
    created() {
        console.log("created in component");
    }
}
</script>
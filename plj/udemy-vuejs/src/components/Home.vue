<template>
    <div>
        <p v-border:solid.shadow.round="{width: '2px', color: 'blue'}">{{ tmpData }}</p>
        <h2>{{ title | lowerCase | upperCase}}</h2>
        <h3>{{ subTitle | upperCase | lowerCase}}</h3>
        <p>{{ number }}</p>
        <button @click="number++">+1</button>
        <CountNumber></CountNumber>
    </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
    mixins: [tokyoNumber],
    directives: {
        border(el, binding) {
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            el.style.borderStyle = binding.arg;
            if(binding.modifiers.round) {
                el.style.borderRadius = "0.5rem"
            }

            if(binding.modifiers.shadow) {
                el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)"
            }
        }
    },
    components: {
        CountNumber
    }
}
</script>
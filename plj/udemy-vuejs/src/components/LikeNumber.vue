<template>
    <div>
        <p>いいね({{ halfNumber }})</p>
        <button @click="increment">+{{ addNumber }}</button>
    </div>
</template>

<script>
export default {
    props: ["totalNumber", "addNumber"],
    computed: {
        halfNumber(){
            return this.totalNumber / 2
        }
    },
    data() {
        return {

        }
    },
    methods: {
        increment() {
            this.$emit("my-click", this.addNumber);
        }
    }
}
</script>

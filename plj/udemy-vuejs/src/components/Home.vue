<template>
    <div>
        <p>Home</p>
        <input type="text">
    </div>
</template>

<script>
export default {
    destroyed() {
        console.log("destroyed Home");
    },
    deactivated() {
        console.log("deactivated Home");
    },
    activated() {
        console.log("activated Home")
    }
}
</script>
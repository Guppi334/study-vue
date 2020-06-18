<template>
    <div>
        <p>About</p>
        <input type="text">
    </div>
</template>

<script>
export default {
    destroyed() {
        console.log("destroyed About");
    },
    deactivated() {
        console.log("deactivated About");
    },
    activated() {
        console.log("activated About")
    }
}
</script>
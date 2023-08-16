<template>
    <button v-if="open" class="btn-newsletters" @close="open = false">
        <img class="img" :src="link" alt="" />
        <button class="btn-close" @click="close">x</button>
    </button>
</template>

<script>
export default {
    data: function () {
        return {
            link: require("../assets/logos/newsletter.svg"),
            open: true,
        };
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style>
.btn-newsletters {
    position: relative;
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: white;
}

:root {
    --btn-close-size: 15px;
}

.btn-close {
    visibility: hidden;
    position: absolute;
    top: calc(-1 * var(--btn-close-size));
    right: calc(-1 * var(--btn-close-size));
    width: var(--btn-close-size);
    height: var(--btn-close-size);
    font-size: var(--btn-close-size);
    line-height: var(--btn-close-size);
    border-radius: 50%;
    background-color: yellow;
}

.img {
    width: 40px;
    height: 40px;
}
</style>

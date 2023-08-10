<template >
    <button v-if="open" @close="open = false" class="btn-newsletters">
        <img class="img" :src="link" alt="">
        <button @click="close" class="btn-close"> x </button>
    </button>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close')
        }
    },
    data: function () {
        return {
            link: require("../assets/logos/newsletter.svg"),
            open: true
        }
    }
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
    --btn-close-size: 15px
}

.btn-close {
    visibility: hidden;
    position: absolute;
    top: calc(-1*var(--btn-close-size));
    right: calc(-1*var(--btn-close-size));
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

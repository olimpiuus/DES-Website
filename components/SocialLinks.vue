<template>
    <div class="flex items-center">
        <a
            v-for="link in links"
            :key="link.name"
            :href="link.href"
            :title="link.info"
            target="_blank"
        >
            <span class="sr-only">{{ link.name }}</span>
            <img
                :class="imgClass"
                :src="link.logo"
                :alt="link.name"
                aria-hidden="true"
            />
        </a>
    </div>
</template>

<script>
export default {
    props: {
        imgClass: {
            type: String,
            default: "h-6 w-6 svg-invert",
        },
    },
    data: function () {
        return {
            links: [
                {
                    name: "Twitter",
                    info: "Dev Edmonton Society Twitter",
                    href: "https://twitter.com/devedmonton",
                    logo:  new URL("../assets/logos/social/twitter.svg", import.meta.url),
                },
                {
                    name: "GitHub",
                    info: "Dev Edmonton Society GitHub",
                    href: "https://github.com/devedmonton",
                    logo: new URL("../assets/logos/social/github.svg", import.meta.url),
                },
                {
                    name: "LinkedIn Group",
                    info: "Dev Edmonton Society LinkedIn Group",
                    href: "https://www.linkedin.com/groups/14007480/",
                    logo: new URL("../assets/logos/social/linkedin.svg", import.meta.url),
                },
                {
                    name: "YouTube",
                    info: "Dev Edmonton Society YouTube",
                    href: "https://youtube.com/devedmonton",
                    logo: new URL("../assets/logos/social/youtube.svg", import.meta.url),
                },
            ],
        };
    },
    computed: {},
    methods: {
        toggleMenu: function () {
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("block");
        },
    },
};
</script>

<style scoped>
.svg-invert:hover {
    filter: invert(10%);
}
</style>

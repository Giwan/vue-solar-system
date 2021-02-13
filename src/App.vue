<template>
    <ItemsList msg="message from parent" :planets="data" />
</template>

<script>
import ItemsList from "./components/ItemsList.vue";

export default {
    name: "App",
    components: {
        ItemsList
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData: async function() {
            const resp = await fetch("/data.json");

            if (!resp.ok) {
                throw new Error("failed to get json data");
            }

            const data = await resp.json();
            // debugger; //eslint-disable-line
            this.data = data;
        }
    },
    data: function() {
        return {
            data: []
        };
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

body {
    background-color: black;
}
</style>

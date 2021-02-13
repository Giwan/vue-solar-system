<template>
    <div>
        <ItemsList msg="message from parent" :planets="planets" />
        <PlanetDetail v-if="selectedPlanet" />
    </div>
</template>

<script>
import ItemsList from "./components/ItemsList";
import PlanetDetail from "./components/PlanetDetail";

export default {
    name: "App",
    components: {
        ItemsList,
        PlanetDetail
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

            this.planets = await resp.json();
        }
    },
    data: function() {
        return {
            planets: []
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

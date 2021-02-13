<template>
    <div>
        <ItemsList
            msg="message from parent"
            :planets="planets"
            :selectPlanet="this.selectPlanet"
        />
        <PlanetDetail
            v-if="selectedPlanet"
            :selectedPlanet="this.selectedPlanet"
            :close="this.selectPlanet"
        />
    </div>
</template>

<script>
import ItemsList from "./components/ItemsList";
import PlanetDetail from "./components/PlanetDetail";
import { loadData } from "./data/data";

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
        loadData,
        selectPlanet: function(planet) {
            this.selectedPlanet = planet;
        }
    },
    data: function() {
        return {
            planets: [],
            selectedPlanet: undefined
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

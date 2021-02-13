<template>
    <main>
        <header>
            <h1>{{ selectedPlanet.name }}</h1>
            <div>
                <button @click="close(undefined)"><div>+</div></button>
            </div>
        </header>
        <article>
            {{ selectedPlanet.description }}
        </article>
        <div>
            <img :src="selectedPlanet.image" :alt="selectedPlanet.name" />
        </div>
    </main>
</template>

<script>
export default {
    name: "PlanetDetail",
    props: {
        selectedPlanet: Object,
        close: Function
    }
};
</script>

<style scoped>
main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    box-sizing: border-box;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(250px, 1fr) 4fr;
    grid-template-rows: 100px 1fr;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 4px var(--unit, 16px);
    grid-column: 1 / -1;
}

h1 {
    text-align: left;
}

main img {
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
}

button {
    font-size: var(--font-size-large, 72px);
    background-color: transparent;
    color: white;
    border: none;
    transform: rotate(45deg);
    transition: scale 0.2s rotate 0.2s;
    padding: 0;
}

button:hover {
    transform: scale(1.1) rotate(45deg);
}

button:active {
    transform: scale(0.95) rotate(45deg);
}

article {
    margin-left: var(--unit, 16px);
    text-align: left;
    font-size: var(--font-size-default, 26px);
    overflow-y: auto;
    padding-right: var(--unit, 16px);
    box-sizing: border-box;
}
</style>

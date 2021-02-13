<template>
    <main>
        <section v-for="planet in planets" :key="planet.name">
            <header>
                <img :src="planet.image" width="100" :alt="planet.name" />
                <h1>{{ planet.name }}</h1>
            </header>
        </section>
    </main>
</template>

<script>
export default {
    name: "ItemsList",
    props: {
        msg: String,
        planets: Array
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

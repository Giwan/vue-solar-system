export const loadData = async function() {
    const resp = await fetch("/data.json");

    if (!resp.ok) {
        throw new Error("failed to get json data");
    }

    this.planets = await resp.json();
};

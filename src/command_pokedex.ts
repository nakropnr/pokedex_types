import { State } from "./state.js";

export async function command_pokedex(state:State) {
    if(!state.pokedex) {
        console.log("No pokemon in pokedex!");
    }
    console.log("Your Pokedex:")
    for (const [key, value] of Object.entries(state.pokedex)) {
        console.log(`- ${key}`);
    }
}
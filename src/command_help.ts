import { CLICommand, State } from "./state.js";

export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    for (const [key, value] of Object.entries(state.commands)) {
        console.log(`${value.name}: ${value.description}`)
    }
}
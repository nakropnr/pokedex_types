import { State } from "./state.js";

export async function command_catch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemon = args[0]
    const randomNumber = Math.random() * 100;
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const target_pokemon = await state.pokeAPI.fetchPokemon(pokemon);
    const exp = target_pokemon.base_experience;
    if (randomNumber > exp) {
        console.log(`Caught ${pokemon}`)
        state.pokedex[pokemon] = target_pokemon;
    } else {
        console.log("Escape")
    }
}
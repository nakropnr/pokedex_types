import { State } from "./state.js";

export async function command_inspect(state: State, ...args: string[])  {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemon = args[0];
    const inspected_pokemon = state.pokedex[pokemon];
    if (!inspected_pokemon) {
        console.log("You have not caught that pokemon");
    };
    console.log(`Name: ${pokemon}\nHeight: ${inspected_pokemon.height}\nWeight: ${inspected_pokemon.weight}\nStats:`)
    for (const stat of inspected_pokemon.stats) {
        console.log(`   -${stat.stat.name}: ${stat.base_stat}`)
    }
    console.log("Type:")
    for (const type of inspected_pokemon.types) {
        console.log(`   - ${type.type.name}`)
    }
}